import { expect, test } from "@playwright/test";

/**
 * `/spa-101` horizontal-overflow regression.
 *
 * The "steps" cards used to carry a fixed `width: 70vw; max-width: 32rem`
 * inside a `.grid_benefits.is-spa101` grid. The legacy grid keeps three
 * columns on phones (the 2-class `.is-spa101` rule outranks the 1-class
 * mobile fallback), so the fixed-width cards blew past the viewport and the
 * whole page scrolled sideways.
 *
 * The fix keeps the legacy class names and adds Tailwind utilities
 * (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `w-full max-w-none`),
 * which live in the `utilities` layer and therefore beat the vendored
 * `legacy` layer.
 */

const OVERFLOW_TOLERANCE = 1;

test("the spa-101 page does not overflow horizontally", async ({ page }) => {
  await page.goto("/spa-101");
  await page.waitForLoadState("networkidle");

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );

  expect(overflow).toBeLessThanOrEqual(OVERFLOW_TOLERANCE);
});

test("the spa-101 steps grid collapses to one column on phones", async ({ page }, testInfo) => {
  await page.goto("/spa-101");
  await page.waitForLoadState("networkidle");

  const columns = await page.evaluate(() => {
    const grid = document.querySelector<HTMLElement>(".grid_benefits.is-spa101")!;
    return getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length;
  });

  if (testInfo.project.name === "mobile") {
    expect(columns).toBe(1);
  } else if (testInfo.project.name === "tablet") {
    expect(columns).toBe(2);
  } else {
    expect(columns).toBe(3);
  }
});
