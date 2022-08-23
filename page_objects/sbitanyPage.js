const {client} = require('nightwatch-api');
const {cli} = require("nightwatch");
const assert = require("assert");

const sbitanyCommands = {
    async verifyPageLoads() {
        await client.useXpath().waitForElementVisible(this.elements.sbitanyIcon.selector, 2000);
    },
    async loginToSbitany(email, password) {
        await client.useXpath().click(this.elements.languageEnglish.selector);
        await client.useXpath().click(this.elements.loginLink.selector);
        await client.useXpath().waitForElementVisible(this.elements.loginForm.selector);
        await client.useXpath().setValue(this.elements.emailInput.selector, email);
        await client.useXpath().setValue(this.elements.passwordInput.selector, password);
        await client.useXpath().click(this.elements.loginButton.selector);
    },

    async cartExists() {
        await client.useXpath().waitForElementVisible(this.elements.cartIcon.selector);
    },
    async loginValidation() {
        await client.useXpath().waitForElementVisible(this.elements.loginCheck.selector);
    },
    async languageChange() {
        await client.useXpath().waitForElementVisible(this.elements.languageArabic.selector);
    },
    async itemSearch(text) {
        await client.useXpath().setValue(this.elements.searchInput.selector, "TV");
        await client.useXpath().click(this.elements.searchButton.selector);
        await client.useXpath().waitForElementVisible(this.elements.searchResult.selector);
        await client.useXpath().click(this.elements.itemName.selector);
        await client.useXpath().click(this.elements.addToCart.selector);
    },
    async cartItems() {
        await client.useXpath().click(this.elements.cartIcon.selector);
        await client.useXpath().click(this.elements.viewCart.selector);
        await client.useXpath().waitForElementVisible(this.elements.itemAdded.selector);
    },

    async cartValidation(name, model, price) {
        await client.useXpath().waitForElementVisible(this.props.itemInTheTable(name, model, price), 6000);

    },
    async itemInCartIconValidation(name) {
        await client.useXpath().click(this.elements.cartIcon.selector);
        await client.useXpath().waitForElementVisible(this.props.itemInTheCartIconTable(name), 6000);
    },
    async homePageValidation(name) {

        await client.useXpath().waitForElementVisible(this.props.itemInHomePage(name), 6000);
        await client.useXpath().waitForElementVisible(this.props.itemInHomePage(name), 6000);

    },
    async cartIconClick() {
        await client.useXpath().click(this.elements.sbitanyIcon.selector);

    },
    async aboutCompany(name) {
        await client.useXpath().waitForElementVisible(this.props.itemInHomePage(name), 6000);

    },
    async compareItems(item1, item2) {
        await assert.equal(item1.name, item2.name, 'Items are not the same');
    },
};
module.exports = {
    url: 'https://www.sbitany.com/',
    commands: [sbitanyCommands],
    elements: {
        sbitanyIcon: {
            selector: '//img[@id="armainay"]',
            LocateStrategy: 'xpath',
        },
        emailInput: {
            selector: '//input[@name="email"]',
            LocateStrategy: 'xpath',

        },
        passwordInput: {
            selector: '//input[@name="password"]',
            LocateStrategy: 'xpath',

        },
        loginLink: {
            selector: '//*[@class="log login"]',
            locateStrategy: 'xpath',
        },

        loginButton: {
            selector: '//*[@class="action login primary"]',
            locateStrategy: 'xpath',
        },
        languageEnglish: {
            selector: '//img[@alt="English"]',
            locateStrategy: 'xpath',

        },
        searchInput: {
            selector: '//input[@class="autosearch-input form-control"]',
            locateStrategy: 'xpath',
        },
        searchButton: {
            selector: '//button[@name="submit_search"]',
            locateStrategy: 'xpath',
        },
        searchResult: {
            selector: '//div[@id="content"]',
            locateStrategy: 'xpath',
        },
        loginForm: {
            selector: '//*[@class="form form-login"]',
            locateStrategy: 'xpath',

        },
        navBarIcon: {
            selector: '//*[@class="navbar-toggle"]',
            locateStrategy: 'xpath',
        },
        cartIcon: {
            selector: '//div[@id="cart"]',
            locateStrategy: 'xpath',
        },
        viewCart: {
            selector: '//*[@style="float:right;"]',
            locateStrategy: 'xpath',

        },
        itemAdded: {
            selector: '//*[contains(text(),"OLED55")]',
            locateStrategy: 'xpath',
        },
        itemName: {
            selector: '//*[contains(text(),"LG Television OLED, A2 Series, Size 55 Inch 4K UHD, Smart WebOS TV. ")]',
            locateStrategy: 'xpath',
        },
        addToCart: {
            selector: '//*[@id="button-cart"]',
            locateStrategy: 'xpath',
        },
        languageArabic: {
            selector: '//*[@name="ar"]',
            locateStrategy: 'xpath',
        },
        loginCheck: {
            selector: '//*[text()="Logout "]',
            locateStrategy: 'xpath',
        },
    },
    props: {
        itemInTheTable(name, model, price) {
            return `(//table)[2]//*[text()="${name}"]/../..//*[text()="${model}"]/../..//*[text()="${price}"][1]`;

        },
        itemInTheCartIconTable(name) {
            return `(//table)[1]//*[text()="${name}"]`;
        },
        itemInHomePage(name) {
            return `//div[@class="row row_qji0  row-style footer-center "]/..//*[text()="${name}"]`;

        },
    }
};