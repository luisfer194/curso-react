// @ts-check
import { test, expect } from '@playwright/test';

/* const CAT_PREFIX_URL = 'https://cataas.com'; */
const LOCALHOST_URL = 'http://localhost:5173';

/* test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const text = await page.getByRole('paragraph');
  const image = await page.getByRole('img');

  const textContent = await text.textContent();
  const imageSrc = await image.getAttribute('src');

  await expect(textContent?.length).toBeGreaterThan(0);
  await expect(imageSrc?.startsWith(CAT_PREFIX_URL)).toBeTruthy();
}); */

test('Image changes when clicking button', async ({ page }) => {
  await page.goto(LOCALHOST_URL);

  const image = page.getByRole('img');
  const button = page.getByRole('button');

  const firstImageSrc = await image.getAttribute('src');

  await button.click();

  // Espera explícita hasta que cambie
  await page.waitForFunction((previousSrc) => {
    const img = document.querySelector('img');
    return img && img.src !== previousSrc;
  }, firstImageSrc);

  const secondImageSrc = await image.getAttribute('src');

  expect(secondImageSrc).not.toBe(firstImageSrc);
});
