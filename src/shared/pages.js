// Editorial pages: CMS collection -> every URL alias it answers to (all aliases work in every language).
// `menuKey` links the page to its entry in translations/*/wording.json (title + language switch).
export const PAGES = [
  { page: 'progetto', menuKey: 'project', paths: ['progetto', 'project', 'projet'] },
  { page: 'squadra', menuKey: 'team', paths: ['squadra', 'equipe', 'team'] },
  { page: 'sponsor', menuKey: 'sponsor', paths: ['sponsor'] },
  { page: 'artists', menuKey: 'artists', paths: ['artists', 'artistes', 'artisti'] },
  { page: 'tickets', menuKey: 'tickets', paths: ['tickets'] },
  { page: 'club', menuKey: 'club', paths: ['club', 'societa'] },
  { page: 'supporters', paths: ['supporters', 'supporteurs', 'tifosi'] },
  { page: 'press', menuKey: 'press', paths: ['press', 'presse', 'stampa'] },
  { page: 'bulletin', menuKey: 'edition', paths: ['edizione', 'edition'] },
  { page: 'contacts', paths: ['contatti', 'contacts'] },
  { page: 'disclaimer', menuKey: 'contacts', paths: ['disclaimer'] },
  { page: 'allstar', title: 'All Star', paths: ['allstar'] },
  { page: 'chapter7', title: 'Chapter 7', paths: ['chapter7'] },
  { page: 'icarus', paths: ['icarus'] },
  { page: 'confirmation', paths: ['confirmation'] },
];

export const pageForPath = (path) => PAGES.find(({ paths }) => paths.includes(path));
