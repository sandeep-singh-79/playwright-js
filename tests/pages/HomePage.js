class HomePage {
  constructor(page) {
    this.page = page;
    this.modal_button_selector = ".modal-footer > button";
    this.search_selector = "input[placeholder=Search]";
    this.location_selector = "li.active > a";
    this.results_selector = ".results-tab";
  }

  async navigateTo() {
    await this.page.goto("https://native-land.ca/");
  }

  async dismissModalBox() {
    await this.page.waitForSelector(this.modal_button_selector);
    await this.page.click(this.modal_button_selector);
  }

  async searchForCityPhiladelphia() {
    await this.page.click(this.search_selector);
    await this.page.keyboard.type("Philadelphia");
    await this.page.waitForSelector(this.location_selector);

    await this.page.click(this.location_selector);
  }

  async captureNativeNationText() {
    await this.page.waitForSelector(`${this.results_selector} > p`);

    const results = await this.page.$(this.results_selector);
    const text = await results.evaluate((element) => element.innerText);
    console.log(text);
  }

  async captureScreenshot() {
    await this.page.screenshot({path: "example.png"});
  }
}

module.exports = { HomePage };
