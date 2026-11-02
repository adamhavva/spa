import { expect, test } from "@playwright/test";

/**
 * Regression guard: neither /journal nor /gift-cards may scroll sideways.
 *
 * The vendored legacy sheet ships fixed pixel widths (`.button { width: 400px }`,
 * `.whats-new_card { width: 70vw }`) and `grid-template-columns: 1fr` tracks,
 * whose min-content floor lets cards push the document wider than the
 * viewport. The page markup neutralises that with Tailwind utilities, so the
 * pages have to be re-checked whenever the markup or the legacy sheet moves.
 */
const ROUTES = ["/journal", "/gift-cards"];

for (const route of ROUTES) {
  test(`${route} has no horizontal overflow`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - window.innerWidth,
    );

    expect(
      overflow,
      `${route} overflows horizontally by ${overflow}px`,
    ).toBeLessThanOrEqual(1);
  });
}
