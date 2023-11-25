import puppeteer from "puppeteer";
import { addArticles, checkArticleExists } from "./dbFunctions.js";

export const bbcScraper = async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  try {
    await page.goto("https://www.bbc.co.uk/news/science_and_environment");
    const articleData = [];

    // Get Main Article URL
    const mainUrl = await page.$("a.ssrcss-afqep1-PromoLink.exn3ah91");
    const mainLink = await page.evaluate((el) => el.href, mainUrl);
    if (checkArticleExists(mainLink)) return;
    articleData[0].url = mainLink;

    // Gather rest of article URLs
    const urlsSelector = "a.ssrcss-1mrs5ns-PromoLink";
    const urls = await page.$$(urlsSelector);
    for (let i = 0; i < Math.min(urls.length, 9); i++) {
      const link = await page.evaluate((el) => el.href, urls[i]);
      if (checkArticleExists(link)) return;
      // i + 1 to avoid overwriting the main page's link
      articleData[i + 1].url = link;
    }

    // Gather headlines
    const headlineSelector = "p.ssrcss-17zglt8-PromoHeadline > span";
    const headlines = await page.$$(headlineSelector);
    for (let i = 0; i < Math.min(articleData.length, 10); i++) {
      const text = await page.evaluate((el) => el.textContent, headlines[i]);
      articleData.push({ headline: text });
    }

    // Gather article image URLs
    const img = await page.$$("picture > img");
    for (let i = 0; i < Math.min(articleData.length, 10); i++) {
      const src = await img[i].evaluate((el) => el.getAttribute("src"));
      articleData[i].img_url = src;
    }

    // Make default preview message and date scraped
    articleData.map((article) => {
      article.preview = "No preview available.";
      article.date = new Date();
    });

    // Gather preview text
    const previewSelector = "p.ssrcss-1q0x1qg-Paragraph.e1jhz7w10";
    const preview = await page.$$(previewSelector);
    const prevText = await page.evaluate((el) => el.textContent, preview[3]);
    articleData[0].preview = prevText;

    await addArticles(articleData);
  } catch (err) {
    console.error(err);
  } finally {
    await browser.close();
  }
};