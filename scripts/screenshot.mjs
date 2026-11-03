/**
 * Screenshot helper (Playwright).
 *
 * Usage:
 *   node scripts/screenshot.mjs <url> [outPrefix] [mobile|tablet|desktop] [--viewport-only]
 *
 * Examples:
 *   node scripts/screenshot.mjs http://localhost:3000 /tmp/kama
 *   node scripts/screenshot.mjs http://localhost:3000/menu /tmp/menu mobile
 *
 * Writes `<outPrefix>-<viewport>.png` and prints each viewport's
 * `scrollWidth` so horizontal overflow is easy to spot (scrollWidth must not
 * exceed the viewport width).
 */
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:3000/";
const out = process.argv[3] ?? "/tmp/kama";
const only = process.argv[4];
const viewportOnly = process.argv.includes("--viewport-only");

const sizes = [
  ["mobile", 390, 844],
  ["tablet", 768, 1024],
  ["desktop", 1440, 900],
];

const browser = await chromium.launch();

for (const [name, width, height] of sizes) {
  if (only && only !== name) continue;

  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(500);

  /* Scroll through the page so the scroll-reveal blocks are visible in the
     screenshot, then return to the top. */
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    const total = document.body.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }
    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 250));
  });
  await page.waitForTimeout(400);

  await page.screenshot({
    path: `${out}-${name}.png`,
    fullPage: !viewportOnly,
  });

  const scrollWidth = await page.evaluate(
    () => document.documentElement.scrollWidth,
  );
  console.log(name, "scrollWidth:", scrollWidth, "viewport:", width);

  await context.close();
}

await browser.close();
