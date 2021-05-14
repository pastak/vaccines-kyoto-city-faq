import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://vaccines-kyoto-city.jp', {
    waitUntil: 'load',
    timeout: 0
  });
  const faqLink = await page.evaluate((selector) => {
    return document.querySelector(selector)?.href;
  }, 'section#faq .sect-txt .txt-link');
  if (!faqLink) return process.exit(1);
  if (!faqLink.includes('yokuaru030427')) return process.exit(1);
  return process.exit(0);
})();
