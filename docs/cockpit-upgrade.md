# Mise à jour de Cockpit (cms.asvelasca.it)

État constaté le 12/10/2026, depuis l'extérieur et sans aucune action d'écriture sur le CMS.

## Constat

| Point | Constat | Gravité |
| --- | --- | --- |
| Version | `package.json` public : **cockpit-next 0.9.3** (2019). La dernière v1 est la 0.12.2 (septembre 2021), plus maintenue depuis. | Critique |
| Failles connues en 0.9.3 | CVE-2020-35846, 35847, 35848 : injection NoSQL dans l'authentification (CVSS 9.8, corrigée en 0.11.2). Permet d'énumérer les comptes et de récupérer un jeton de réinitialisation de mot de passe, donc de prendre la main sur un compte admin. Non testée sur la prod. | Critique |
| Failles v1 jamais corrigées | CVE-2021-32857 (XSS dans l'éditeur HTML), CVE-2026-13533 (lecture de `config/config.yaml`). Pour cette dernière, `config.yaml` répond bien **403** chez vous. | Moyenne |
| PHP | `X-Powered-By: PHP/7.3`, sans correctifs de sécurité depuis décembre 2021. | Haute |
| Clé API | Présente dans le JavaScript public (inévitable pour un site statique) et **trop large** : `/api/collections/listCollections` et `/api/singletons/listSingletons` répondent 200. Je n'ai pas testé l'écriture. | Haute |
| CORS | `Access-Control-Allow-Origin: *` avec `PUT, POST, DELETE` autorisés. Couplé à une clé trop large, n'importe quel site peut appeler l'API. | Moyenne |
| Fichiers publics | `composer.json` et `package.json` sont lisibles et révèlent la version. | Faible |

Ce qui est déjà corrigé côté site (ce dépôt) : le HTML du CMS est nettoyé avant affichage (DOMPurify, iframes et formulaires sur liste blanche), CSP, en-têtes de sécurité et dépendances à jour. Un compte admin du CMS compromis ne peut donc plus injecter de script dans le site.

## Étape 0 : tout de suite (environ 1 h, sans risque)

1. **Clé API restreinte.** Dans Cockpit, *Settings > API Access*, créer une clé « custom » avec uniquement ces règles :

   ```
   ^/api/collections/get/(home|sponsorimage|progetto|squadra|sponsor|artists|tickets|club|supporters|press|bulletin|contacts|disclaimer|allstar|chapter7|icarus|confirmation|shop|season)$
   ^/api/cockpit/image$
   ```

   La mettre dans `.env`, refaire le build et renvoyer `dist/` sur le FTP, vérifier le site, puis **régénérer la clé maître** (l'ancienne est publique depuis des années).
2. **Passer en Cockpit 0.12.2** (dernière v1, compatible PHP 7.3). Sauvegarder `config/` et `storage/`, remplacer le reste du code par celui du tag 0.12.2 (github.com/agentejo/cockpit), remettre `config/` et `storage/`. Cela corrige les injections NoSQL de 2020.
3. **Changer les mots de passe** des comptes admin : avec la 0.9.3, on ne peut pas savoir si la faille a déjà servi.
4. **Masquer les fichiers de version** dans le `.htaccess` du CMS :

   ```apache
   <FilesMatch "^(composer\.(json|lock)|package\.json|README\.md)$">
     Require all denied
   </FilesMatch>
   ```

## Étape 1 : PHP 8.3 ou plus (hébergeur)

Cockpit 2 exige **PHP 8.3 minimum** avec les extensions curl, dom, fileinfo, gd, json, openssl, pcre, zip et pdo_sqlite, plus 256 Mo de mémoire. La v1 n'est pas faite pour PHP 8. Le plus simple : un sous-domaine `cms2.asvelasca.it` en PHP 8.3 pendant que l'actuel reste en 7.3 le temps de la migration (la plupart des hébergeurs règlent la version de PHP par dossier ou sous-domaine).

## Étape 2 : migrer vers Cockpit 2.14 (recommandé)

Dernière version : **2.14.1 (26/08/2026)**. Le cœur est gratuit (MIT) ; la version Pro (299 € par projet) n'apporte rien d'indispensable ici.

**Ce que ça change pour le site**

- **Images en WebP ou AVIF** : `/api/assets/image/{id}?w=…&mime=auto&o=1`, avec un cache navigateur de 30 jours. Aujourd'hui la v1 ne sait pas convertir : une photo PNG reste un PNG de 650 Ko même redimensionnée (le site plafonne ces images à 1280 px pour limiter la casse).
- **Plus aucune clé dans le JavaScript** : la v2 a un rôle « public » en lecture seule par modèle (`content/{model}/read`), choisi dans `/system/api/public`.
- **Droits par rôle** pour les clés et les comptes, un CMS maintenu et des correctifs de sécurité réguliers.

**Migration des données**

Il n'existe pas d'outil officiel v1 vers v2. Je propose un script qui :

1. lit chaque collection v1 avec la clé actuelle (19 collections, une seule entrée chacune sauf `shop`) ;
2. crée les modèles v2 correspondants (des singletons `background` + `content` localisés, `home.slider` et `sponsorimage.Images` en champs `asset` multiples, `shop.products` en tableau) ;
3. copie `storage/uploads` (les chemins ne changent pas) et réindexe les assets ;
4. compare page par page l'ancien et le nouveau rendu.

Les clés API et les comptes sont à recréer à la main (le format des clés change).

**Côté front : un seul fichier à adapter**, `src/shared/cms.js`.

| | Cockpit 1 (actuel) | Cockpit 2 |
| --- | --- | --- |
| Lecture | `GET /api/collections/get/{name}?lang=it` | `GET /api/content/item/{model}?locale=it` |
| Réponse | `{ fields, entries: [ … ] }` | l'objet directement |
| Authentification | en-tête `Cockpit-Token` | en-tête `api-key`, ou aucun avec le rôle public |
| Images | `/api/cockpit/image?src=/storage/…` | `/api/assets/image/{assetId}` (identifiant d'asset, pas un chemin) |

## Effort estimé

| Étape | Durée | Qui |
| --- | --- | --- |
| 0. Clé restreinte, v1 0.12.2, mots de passe | 1 h | toi, dans l'admin Cockpit et en FTP |
| 1. PHP 8.3 | dépend de l'hébergeur | panneau d'hébergement |
| 2. Cockpit 2 et script de migration | 1 à 2 jours | script + adaptation de `cms.js` |

## Alternatives (rapidement)

Rester sur Cockpit 2 est le plus simple : même logique, cœur gratuit, peu de changements côté front. Si l'hébergement change : Kirby ou Statamic (PHP, payants) ; Directus ou Strapi demandent un hébergement Node.

## Sources

- Cockpit 2 : https://github.com/Cockpit-HQ/Cockpit/releases, https://getcockpit.com/documentation/core/quickstart/requirements, https://getcockpit.com/documentation/core/api/authentication
- Cockpit 1 : https://github.com/agentejo/cockpit
- Failles : https://nvd.nist.gov/vuln/detail/CVE-2020-35846, https://nvd.nist.gov/vuln/detail/CVE-2026-13533, https://github.com/advisories/GHSA-7x5c-vfhj-9628
- Notes de migration de la communauté : https://github.com/raffaelj/cockpit-scripts/blob/master/migrate-from-cockpit-v1-to-v2.md
