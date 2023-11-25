import puppeteer from 'puppeteer';
import { addArticles } from './dbFunctions.js';

export default async function guardianScraper() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  try {
    // Navigate to page URL
    await page.goto('https://www.theguardian.com/uk/environment');

    // Select element from dom
    const headlines = await page.$$('.dcr-v1s16m');
    const previews = await page.$$('.dcr-1ay6c8s');
    const articleLinks = await page.$$('.dcr-lv2v9o');
    const images = await page.$$('.dcr-evn1e9');

    let articles = [];

    // Extract article details & format for database storage
    for (let i = 0; i < Math.min(articleLinks.length, 10); i++) {
      const headline = await headlines[i].evaluate((el) => el.textContent);
      const preview = await previews[i].evaluate((el) => el.textContent);
      const url = await articleLinks[i].evaluate((el) => el.href);
      const img_url = await images[i].evaluate((el) => el.getAttribute('src'));

      articles.push({
        date: new Date(),
        headline,
        preview,
        url,
        img_url: img_url,
      });
    }

    addArticles(articles);
  } catch (err) {
    console.log(err);
  } finally {
    await browser.close();
  }
}

guardianScraper();
