import { Given, When, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

import SearchPage from "../pageobjects/seach.page.js";
import Numbers from "../pageobjects/manageJSON.js";

const pages = {
  searcher: SearchPage,
};

Given(/^I am on the (.+) page$/, async (page) => {
  await SearchPage.open(page);

  await browser.waitUntil(
    async () => {
      const readyState = await browser.execute(() => document.readyState);
      return readyState === "complete";
    },
    {
      timeout: 10000,
      timeoutMsg: "Page did not load within the expected time",
    }
  );
});

When(/^I search for (.+)$/, async (searchTerm) => {
  await SearchPage.search(searchTerm);
});

Then(/^I should see the result in the json file$/, async () => {
  await Numbers.insertJson();
});
