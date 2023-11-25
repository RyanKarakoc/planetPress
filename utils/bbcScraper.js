import puppeteer from 'puppeteer';
import { addArticles, checkArticleExists } from './dbFunctions.js';

/** All articles
 * headline: 
  - FIRST: ssrcss-17zglt8-PromoHeadline exn3ah96 > span
  - REST:  ssrcss-17zglt8-PromoHeadline exn3ah96 > span

 * img_url
  - FIRST: ssrcss-evoj7m-Image edrdn950
  - REST:  ssrcss-evoj7m-Image edrdn950

 * preview - only first article has a preview
  - FIRST ONLY: ssrcss-1q0x1qg-Paragraph e1jhz7w10
  - REST: [ NONE ]

 * url - NOTE: featured article's className with "ssrcss-" prefix is unique, use exn3ah91 instead
  - FIRST: ssrcss-afqep1-PromoLink exn3ah91
  - REST:  ssrcss-1mrs5ns-PromoLink exn3ah91
*/
export const bbcScraper = async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  try {
    await page.goto('https://www.bbc.co.uk/news/science_and_environment');

    // Select elements from dom
    const headlines = await page.$$('.ssrcss-17zglt8-PromoHeadline > span');
    const articleLinks = await page.$$('.exn3ah91');
    const images = await page.$$('.ssrcss-evoj7m-Image');

    let articles = [];

    // Extract article details & format for database storage
    for (let i = 0; i < Math.min(articleLinks.length, 10); i++) {
      // For first/featured article only, scrape article-preview text
      let preview = null;
      if (i === 0) {
        const featuredArticlePreview = await page.$(
          '.ssrcss-1q0x1qg-Paragraph'
        );
        preview = await featuredArticlePreview.evaluate((el) => el.textContent);
      }

      // For all articles
      const headline = await headlines[i].evaluate((el) => el.textContent);
      const url = await articleLinks[i].evaluate((el) => el.href);
      const img_url = await images[i].evaluate((el) => el.getAttribute('src'));

      // Check if current article already exists in the DB
      // If not, then prep it to be stored in the DB
      const exists = await checkArticleExists(url);
      if (!exists) {
        articles.push({
          headline,
          preview,
          url,
          img_url,
          date: new Date(),
        });
      }
    }

    console.log(articles);

    // Add formatted articles to DB (if any)
    if (articles.length) addArticles(articles);
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
};
