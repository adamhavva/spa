import puppeteer from "puppeteer";

const url = process.argv[2] ?? "http://localhost:3001/";
const out = process.argv[3] ?? "/tmp/kama";
const only = process.argv[4];

const sizes = [
  ["mobile", 390, 844],
  ["tablet", 768, 1024],
  ["desktop", 1440, 900],
];

const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });

for (const [name, width, height] of sizes) {
  if (only && only !== name) continue;
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: `${out}-${name}.png`, fullPage: true });
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(name, "scrollWidth:", scrollWidth, "viewport:", width);
  await page.close();
}

await browser.close();
