import puppeteer from "puppeteer";
import { addArticles, checkArticleExists } from "./dbFunctions.js";

const natGeoScraper = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  try {
    // Navigate the page to a URL
    await page.goto(
      "https://www.nationalgeographic.com/environment/topic/climate-change"
    );

    const selector = ".GridPromoTile__Row";

    await page.waitForSelector(selector);
    const el = await page.$(selector);

    const articleData = await page.evaluate(() => {
      const extractedData = [];
      const promoTiles = document.querySelectorAll(
        ".PromoTile__Title--truncated"
      );

      promoTiles.forEach((tile) => {
        const headline = tile.querySelector("span").textContent.trim();
        const url = tile
          .closest("article")
          .querySelector("a")
          .getAttribute("href");
        const img_url = tile
          .closest("article")
          .querySelector(".BackgroundImage__Image--highRes")
          .style.backgroundImage.replace(/.*\s?url\([\'\"]?/, "")
          .replace(/[\'\"]?\).*/, "");
        extractedData.push({ headline, url, img_url });
      });

      return extractedData;
    });

    for (const article of articleData) {
      const url = article.url;
      const exists = await checkArticleExists(url);
      if (exists) {
        continue;
      } else {
        if (!article.preview) {
          article.preview = "No preview available.";
        }
        if (!article.date) {
          article.date = new Date();
        }
        addArticles(articleData);
      }
    }
  } catch (err) {
    console.log("scrape failed", err);
  } finally {
    await browser.close();
  }
};

natGeoScraper();
