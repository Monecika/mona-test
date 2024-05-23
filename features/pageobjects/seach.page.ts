import { $ } from "@wdio/globals";
import Page from "./page.js";

class SearchPage extends Page {
  public get searchField() {
    return $("#js-search-input");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  public async search(searchItem: string) {
    await this.searchField.setValue(searchItem);
    await this.btnSubmit.click();
  }
}

export default new SearchPage();
