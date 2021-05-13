import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://vaccines-kyoto-city.jp');
  const faqLink = await page.evaluate((selector) => {
    return document.querySelector<HTMLAnchorElement>(selector)?.href;
  }, 'section#faq .sect-txt .txt-link');
  if (!faqLink) return process.exit(1);
  if (!faqLink.includes('yokuaru030427')) return process.exit(1);
  return process.exit(0);
})();
