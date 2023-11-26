import puppeteer from "puppeteer";
import { addArticles, checkArticleExists } from "./dbFunctions.js";

/* const googleEventsScraper = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  try {
    // Navigate the page to a URL
    await page.goto(
      "https://www.google.com/search?q=environmental+events&oq=enviromental+events&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDUwMjlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8&ibp=htl;events&rciv=evn&sa=X&ved=2ahUKEwilg4rv7uGCAxXkV0EAHdU_CbMQ5rwDKAJ6BAhrEA0#fpstate=tldetail&htivrt=events&htidocid=L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDIzLTExLTMwfDE2MTU1Mjg5ODM5MzI2ODY0NDE4"
    );
    await page.waitForFunction('document.querySelector("body")');

    // "VfPpkd-dgl2Hf-ppHlrf-sM5MNb"

    // "VfPpkd-dgl2Hf-ppHlrf-sM5MNb"

    const rejectCookiesSelector = ".VfPpkd-dgl2Hf-ppHlrf-sM5MNb > button"; // search reject cookies

    await page.waitForSelector(rejectCookiesSelector),
      await page.click(rejectCookiesSelector); // clicks reject cookies

    await page.screenshot({ path: "screenshot.jpg" });

    // const searchMoreEventSelector = ".BXE0fe"; // search more events
    // await page.waitForSelector(searchMoreEventSelector);
    // await page.click(searchMoreEventSelector); // clicks search for more events

    console.log("4");

    // const eventsSelector = ".PaEvOc";

    // await page.waitForSelector(eventsSelector);




    // const eventData = await page.evaluate(() => {
    //     const eventDiv = document.querySelector(".PaEvOc"); // Update the selector if needed

    //   const eventName = eventDiv.querySelector(".YOGjf").innerText.trim();
    //   const date = eventDiv.querySelector(".UIaQzd").innerText.trim();
    //   const month = eventDiv.querySelector(".wsnHcb").innerText.trim();
    //   const dayAndTime = eventDiv.querySelector(".cEZxRc").innerText.trim();
    //   const image_Url = eventDiv.querySelector("g-img img").getAttribute("src");

    //   const location = eventDiv
    //     .querySelector(".cEZxRc:nth-child(3)")
    //     .innerText.trim();

    //   return {
    //     eventName,
    //     date,
    //     month,
    //     dayAndTime,
    //     location,
    //     image_Url,
    //   };
    // });

    console.log(eventData);
  } catch (err) {
    console.log("scrape failed", err);
  } finally {
    await browser.close();
  }
}; */

const googleEventsScraper = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });
  try {
    // Navigate the page to a URL
    await page.goto("https://extinctionrebellion.uk/act-now/events/");

    const selector = ".item-list";
    await page.waitForSelector(selector);
    const el = await page.$(selector);

    const text = await el.evaluate((e) => e.innerHTML);

    const eventNames = await page.$$(".tease-event__body > h2");

    const dateHolders = await page.$$(
      "tease-event__date-recurring tease-event__date-long"
    );

    for (let i = 0; i < Math.min(eventNames.length, 10); i++) {
      const eventName = await eventNames[i].evaluate((el) => el.textContent);

      console.log(dateHolder);
    }

    /* // Extract event names and next dates
    const eventDetails = await page.evaluate(() => {
      const eventElements = document.querySelectorAll(".tease-event__body");

      const events = [];

      eventElements.forEach((event) => {
        const eventName = event.querySelector("h2").innerText;

        // const dates = await page.$$(
        //   ".tease-event__date-recurring tease-event__date-long"
        // );

        events.push({ eventName });
      });

      return events;
    }); */
  } catch (err) {
    console.log("scrape failed", err);
  } finally {
    await browser.close();
  }
};

googleEventsScraper();
