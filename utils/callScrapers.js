import { bbcScraper } from "./bbcScraper";
import { guardianScraper } from "./guardianScraper";
import { natGeoScraper } from "./natGeoScraper";

export const callScrapers = async () => {
  await bbcScraper();
  await guardianScraper();
  await natGeoScraper();
  console.log("All scraped and up to date!");
};
