import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { buildCsp } from './src/shared/security.js';
import { sitemapXml } from './src/shared/seo.js';

// Only these variables from .env reach the browser bundle (TUTOCAMPI_TOKEN, PAYPAL_CLIENT_ID… stay out).
const ENV_PREFIX = ['SERVER_URL', 'API_URL', 'API_TOKEN'];

const VENDOR = /node_modules\/(react|react-dom|react-router|scheduler)\//;

const cspPlugin = (cmsOrigin) => ({
  name: 'velasca-csp',
  apply: 'build',
  transformIndexHtml: (html) =>
    html.replace(
      '<!-- csp -->',
      `<meta http-equiv="Content-Security-Policy" content="${buildCsp({ cmsOrigin })}" />`,
    ),
});

// sitemap.xml listed in robots.txt: every page in every language, rebuilt with the site.
const sitemapPlugin = () => ({
  name: 'velasca-sitemap',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: 'sitemap.xml',
      source: sitemapXml(new Date().toISOString().slice(0, 10)),
    });
  },
});

// The condensed headlines reflow a lot when the font swaps in: fetch it with the page.
const preloadFontPlugin = () => ({
  name: 'velasca-preload-font',
  apply: 'build',
  transformIndexHtml: (_html, { bundle }) =>
    Object.keys(bundle ?? {})
      .filter((fileName) => /archivo-latin-wdth-normal.*\.woff2$/.test(fileName))
      .map((fileName) => ({
        tag: 'link',
        attrs: { rel: 'preload', as: 'font', type: 'font/woff2', href: `/${fileName}`, crossorigin: '' },
        injectTo: 'head',
      })),
});

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), ENV_PREFIX);

  if (command === 'build' && mode !== 'test' && !env.SERVER_URL) {
    throw new Error('SERVER_URL is missing: add it to .env before building.');
  }
  const cmsOrigin = env.SERVER_URL ? new URL(env.SERVER_URL).origin : '';

  return {
    plugins: [react(), cspPlugin(cmsOrigin), preloadFontPlugin(), sitemapPlugin()],
    envPrefix: ENV_PREFIX,
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "/src/styles/tools" as *;\n' },
      },
    },
    build: {
      target: 'es2022',
      sourcemap: false,
      rollupOptions: {
        output: {
          // React rarely changes: its own long-cached file survives our deploys.
          manualChunks: (id) => (VENDOR.test(id) ? 'vendor' : undefined),
        },
      },
    },
    test: {
      environment: 'jsdom',
      include: ['src/**/*.test.{js,jsx}'],
      env: {
        SERVER_URL: 'https://cms.example.test/',
        API_URL: 'api',
        API_TOKEN: 'test-token',
      },
    },
  };
});
