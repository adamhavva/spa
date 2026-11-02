import { expect, test } from "@playwright/test";

/**
 * `/join-our-team` regression tests.
 *
 * The page is built from legacy Webflow classes (`.whats-new_list`,
 * `.location-card_component`, `.workers-reviews_grid`, …) whose fixed widths
 * (`width: 70vw`, `width: 560px`, `max-width: 32rem`) used to push the whole
 * document sideways on small screens. The page must never scroll horizontally
 * at any width — the testimonial slider scrolls inside its own container.
 */

const ROUTE = "/join-our-team";

/** Horizontal overflow of the document, in CSS pixels. */
async function horizontalOverflow(page: import("@playwright/test").Page) {
  return page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
}

test("the page does not overflow horizontally", async ({ page }) => {
  await page.goto(ROUTE);
  await page.waitForLoadState("networkidle");

  const overflow = await horizontalOverflow(page);

  expect(
    overflow,
    `document overflows horizontally by ${overflow}px`,
  ).toBeLessThanOrEqual(1);
});

test("no card sticks out of the viewport", async ({ page }) => {
  await page.goto(ROUTE);
  await page.waitForLoadState("networkidle");

  const overflowing = await page.evaluate(() => {
    const viewportWidth = window.innerWidth;
    const selectors = [
      ".whats-new_card",
      ".location-card_component",
      ".image-container",
      ".benefits_main-card",
      ".workers-reviews_grid",
    ];

    return selectors.flatMap((selector) =>
      Array.from(document.querySelectorAll(selector))
        .map((element) => ({
          selector,
          right: Math.round(element.getBoundingClientRect().right),
        }))
        .filter(({ right }) => right > viewportWidth + 1),
    );
  });

  expect(overflowing).toEqual([]);
});

test("the testimonial slider scrolls inside its own container", async ({
  page,
}) => {
  await page.goto(ROUTE);
  await page.waitForLoadState("networkidle");

  const slider = page.locator(".workers-reviews_grid");
  await expect(slider).toHaveCount(1);

  const { overflowX, scrollWidth, clientWidth, right, viewportWidth } =
    await slider.evaluate((element) => {
      const rect = element.getBoundingClientRect();
      return {
        overflowX: getComputedStyle(element).overflowX,
        scrollWidth: element.scrollWidth,
        clientWidth: element.clientWidth,
        right: rect.right,
        viewportWidth: window.innerWidth,
      };
    });

  expect(["auto", "scroll"]).toContain(overflowX);
  expect(scrollWidth).toBeGreaterThanOrEqual(clientWidth);
  expect(right).toBeLessThanOrEqual(viewportWidth + 1);
});
