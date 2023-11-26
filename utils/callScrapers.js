import { bbcScraper } from "./bbcScraper.js";
import { guardianScraper } from "./guardianScraper.js";
import { natGeoScraper } from "./natGeoScraper.js";

export const callScrapers = async () => {
  await bbcScraper();
  await guardianScraper();
  await natGeoScraper();
  console.log("All scraped and up to date!");
};
