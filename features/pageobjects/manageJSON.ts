import Page from "./page.js";
import fs from "fs";

class Numbers {
  private async getAllArticles() {
    return $$(".phone_icon");
  }

  private async truncateJSON() {
    fs.truncateSync("phone.JSON");
  }

  async insertJson() {
    await this.truncateJSON();

    const span_numbers = await this.getAllArticles();
    const numberArray: string[] = [];

    for (const number of span_numbers) {
      const numberExtract = await number.getText();
      numberArray.push(numberExtract);
    }

    const phoneNumbers = [{ phone: numberArray }];
    fs.writeFileSync("phone.JSON", JSON.stringify(phoneNumbers));
  }
}

export default new Numbers();
