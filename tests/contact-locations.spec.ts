import { expect, test } from "@playwright/test";

/**
 * The /contact location list.
 *
 * Each branch shows a photo and an address; clicking either opens a map
 * popup with the Google Maps embed of that branch, plus a link to Google Maps
 * directions. The popup closes with Escape or the close button.
 */
test.describe("/contact location cards", () => {
  test("lists the three branches in three columns on desktop", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });

    const columns = await page.evaluate(() => {
      const grid = document.querySelector(".contact-card")?.parentElement;
      if (!grid) return 0;
      return getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    });

    // Three across from the `lg` breakpoint (992px) up; two on tablets.
    const width = page.viewportSize()?.width ?? 0;
    expect(columns).toBe(width >= 992 ? 3 : width >= 480 ? 2 : 1);
  });

  test("opens the map popup from the photo", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });

    await page.getByRole("button", { name: /Lihat peta/ }).first().click();

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.locator("iframe")).toHaveAttribute(
      "src",
      /google\.com\/maps\/embed/,
    );
    await expect(
      dialog.getByRole("link", { name: "Dapatkan Rute" }),
    ).toHaveAttribute("href", /google\.com\/maps\/dir/);
  });

  test("opens the map popup from the address", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });

    await page.getByRole("button", { name: /Jl\. Barito/ }).click();

    await expect(page.getByRole("dialog")).toBeVisible();
  });

  test("Escape closes the popup", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });

    await page.getByRole("button", { name: /Lihat peta/ }).first().click();
    await expect(page.getByRole("dialog")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });
});
