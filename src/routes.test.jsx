import { cleanup, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { routes } from './routes';

const CMS = {
  squadra: { entries: [{ content: '<h6>Rosa</h6><p>La squadra</p><script>alert(1)</script>' }] },
  shop: {
    entries: [
      {
        products: {
          products: [
            {
              name: 'Home Shirt',
              price: '90',
              season: '2025/26',
              buttonId: 'BTN1',
              sizes: ['S', 'M'],
            },
            { name: 'Old Scarf', price: '20', isSoldOut: true },
          ],
        },
      },
    ],
  },
};

const renderAt = (path) =>
  render(<RouterProvider router={createMemoryRouter(routes, { initialEntries: [path] })} />);

beforeEach(() => {
  window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });
  window.scrollTo = () => {};
  HTMLDialogElement.prototype.showModal ??= function showModal() {
    this.open = true;
  };
  HTMLDialogElement.prototype.close ??= function close() {
    this.open = false;
  };
  vi.stubGlobal(
    'fetch',
    vi.fn(async (url) => {
      const name = new URL(url).pathname.split('/').pop();
      return CMS[name]
        ? { ok: true, json: async () => CMS[name] }
        : { ok: false, status: 404, statusText: 'Not Found' };
    }),
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe('routes', () => {
  it('renders an editorial page with sanitized CMS content', async () => {
    renderAt('/it/squadra');
    expect(await screen.findByRole('heading', { level: 1, name: 'squadra' })).toBeTruthy();
    expect(await screen.findByText('La squadra')).toBeTruthy();
    expect(document.querySelector('.RichContent script')).toBeNull();
    expect(document.documentElement.lang).toBe('it');
  });

  it('serves the same page under its other aliases', async () => {
    renderAt('/fr/team');
    expect(await screen.findByRole('heading', { level: 1, name: 'equipe' })).toBeTruthy();
  });

  it('lists products and opens a product with its PayPal form', async () => {
    const { unmount } = renderAt('/en/shop');
    expect(await screen.findByText('Home Shirt')).toBeTruthy();
    expect(screen.getByText('Sold out')).toBeTruthy();
    unmount();

    renderAt('/en/shop/1');
    const form = (await screen.findByRole('button', { name: /Order/ })).closest('form');
    expect(form.getAttribute('action')).toBe('https://www.paypal.com/cgi-bin/webscr');
    expect(form.querySelector('[name="hosted_button_id"]').value).toBe('BTN1');
    expect(form.querySelector('[name="on1"]:checked').value).toBe('S');
  });

  it('shows offside for unknown pages, products and locales', async () => {
    renderAt('/en/nowhere');
    expect(await screen.findByText('404')).toBeTruthy();
    cleanup();

    renderAt('/xx/home');
    expect(await screen.findByText('404')).toBeTruthy();
    cleanup();

    renderAt('/en/shop/99');
    expect(await screen.findByText('This product does not exist.')).toBeTruthy();
  });
});
