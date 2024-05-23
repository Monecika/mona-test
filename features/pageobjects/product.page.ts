import Page from "./page.js";
import fs from "fs";

class Artciles {


  private async getAllArticles() {
    return $$(".ads-list-photo-item");
  }

  public async expectRedirecting(){
    const pattern = /\d+$/;

    return pattern.test(await browser.getUrl());
  }

  public async loadArticle() {
    const articles = await this.getAllArticles();
  
    for (let i = 0; i < articles.length; i++) {
      try {
        const article = articles[i];
        const titleElement = await article.$('.ads-list-photo-item-title');
        const linkElement = await titleElement.$('a');
        const innerHTML = await linkElement.getText();

        if (innerHTML.toLowerCase().includes("skoda")) {
          await article.click();
          break;
        }
      } catch (error) {
        console.log("Error clicking on article:", error);
      }
    }
  }
}
    

export default new Artciles();
