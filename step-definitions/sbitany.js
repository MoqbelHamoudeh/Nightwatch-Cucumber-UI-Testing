const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
const assert = require("assert");
const {cli} = require("nightwatch");
const sbitanyPage = client.page.sbitanyPage();


Given('I open sbitany website', async () => {
    await sbitanyPage.navigate();
    await sbitanyPage.verifyPageLoads();
});
When('i login to sbitany with this account details', async (dataTable) => {
    const table = dataTable.hashes()[0];
    await sbitanyPage.loginToSbitany(table.email, table.password);
});
When('I validate that the cart exists', async () => {
    await sbitanyPage.cartExists();
});
When('I validate account login', async () => {
    await sbitanyPage.loginValidation();

});
When('I validate language change', async () => {
    await sbitanyPage.languageChange();
});

When('I search of an item and add it to the cart {string}', async (text) => {
    await sbitanyPage.itemSearch(text);
});
When('I validate the item added in the cart', async () => {
    await sbitanyPage.cartItems();
});


When('I validate that these items are existed in the cart', async function validateItems(dataTable) {
    const table = dataTable.hashes();
    this.itemsInTheCartTable = [];
    const items = this.itemsInTheCartTable;
    for (let item of table) {
        await sbitanyPage.cartValidation(item.name, item.model, item.price);
        items.push(item);

    }
});
When('I validate the items in the cart icon', async function validateItems(dataTable) {
    const table = dataTable.hashes();
    this.itemsInTheCartIcon = [];
    const items = this.itemsInTheCartIcon;
    for (let item of table) {
        await sbitanyPage.itemInCartIconValidation(item.name);
        items.push(item);

    }
});
When('I compare items in the cart and items in the cart icon', async function compareItems() {
    const itemsInTheCartTable = this.itemsInTheCartTable;
    const itemsInTheCartIcon = this.itemsInTheCartIcon;
    for (let i = 0; i < itemsInTheCartTable.length; i++) {
        await sbitanyPage.compareItems(itemsInTheCartTable[i], itemsInTheCartIcon[i]);
        //for loop to compare two object from two arrays
    }
});

When('I validate the bottom of home page', async (dataTable) => {
    await sbitanyPage.cartIconClick();
    const table = dataTable.hashes();
    for (let items of table) {
        await sbitanyPage.homePageValidation(items.name);

    }
});
When('I validate about company section', async (dataTable) => {
    const table = dataTable.hashes();
    for (let items of table) {
        await sbitanyPage.homePageValidation(items.name);
    }
});
