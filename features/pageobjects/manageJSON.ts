import Page from "./page.js";
import fs from "fs";

class Numbers {
  private async getAllArticles() {
    return $$(".phone_icon");
  }

  private async truncateJSON() {
    fs.truncateSync("phone.JSON");
  }

  private async getNumber(){

    const phoneNumberLink = await $('dl.js-phone-number a');

    const phoneNumberHref = await phoneNumberLink.getAttribute('href');

    return phoneNumberHref;
  }
  
  private async getClick(){
    return $(".js-phone-number-show");
  }

  async insertJson() {
    await this.truncateJSON();
    (await this.getClick()).click();

    const number = await this.getNumber();

    fs.writeFileSync("phone.JSON", JSON.stringify(number));
  }
}

export default new Numbers();
