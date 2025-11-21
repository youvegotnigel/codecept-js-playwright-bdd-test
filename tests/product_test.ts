import assert from 'assert';

Feature('product');

Scenario('verify adding items to cart',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
    
    I.click({ byTestId: 'add-to-cart-sauce-labs-backpack' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-bike-light' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-fleece-jacket' });

    I.see('3', { byTestId: 'shopping-cart-badge' });

});


Scenario.only('verify price sorting', async ({ I }) => {

    await I.amOnPage('/');
    await I.login("standard_user", "secret_sauce");

    await I.selectOption({ byTestId: 'product-sort-container' }, 'Price (low to high)');
    await I.waitForElement({ byTestId: 'inventory-item-price' }, 5); // wait until prices are visible

    //const els = await page.locator('.inventory_item_price');
    // const count = await els.count();

    // const prices = [];

    // for (let i = 0; i < count; i++) {
    //     const text = await els.nth(i).innerText();
    //     prices.push(text);
    // }


    const uiPricesText: string[] = await I.grabTextFromAll({ byTestId: 'inventory-item-price' });
    const uiPrices = uiPricesText.map((t) => parseFloat(t.replace('$', '')));

    const sortedPrices = [...uiPrices].sort((a, b) => a - b);

    console.log('UI Text Prices: ', uiPricesText);
    console.log('UI Prices: ', uiPrices);
    console.log('Sorted Prices: ', sortedPrices);

    // assert.deepStrictEqual(
    //     uiPrices,
    //     sortedPrices,
    //     'Items are not sorted by price low → high',
    // );

});