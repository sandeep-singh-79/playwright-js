class HomePage {
    constructor(page) {
        this.page = page
    }

    async navigateTo() {
        await this.page.goto("https://native-land.ca/");
    }
}

module.export = {HomePage}