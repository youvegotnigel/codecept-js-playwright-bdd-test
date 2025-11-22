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


Scenario('verify price sorting low to high', async ({ I }) => {

    await I.amOnPage('/');
    await I.login("standard_user", "secret_sauce");

    await I.selectOption({ byTestId: 'product-sort-container' }, 'Price (low to high)');

    //const uiPricesText: string[] = await I.grabTextFromAll({ byTestId: 'inventory-item-price' });
    const uiPricesText: string[] = await I.grabTextFromAll('.inventory_item_price');
    const uiPrices = uiPricesText.map((t) => parseFloat(t.replace('$', '')));

    const sortedPrices = [...uiPrices].sort((a, b) => a - b);

    console.log('UI Text Prices:', uiPricesText);
    console.log('UI Prices:', uiPrices);
    console.log('Sorted Prices:', sortedPrices);

    assert.deepStrictEqual(
        uiPrices,
        sortedPrices,
        'Items are not sorted by price low → high',
    );

});


Scenario('verify price sorting high to low', async ({ I }) => {

    await I.amOnPage('/');
    await I.login("standard_user", "secret_sauce");

    await I.selectOption({ byTestId: 'product-sort-container' }, 'Price (high to low)');

    //const uiPricesText: string[] = await I.grabTextFromAll({ byTestId: 'inventory-item-price' });
    const uiPricesText: string[] = await I.grabTextFromAll('.inventory_item_price');
    const uiPrices = uiPricesText.map((t) => parseFloat(t.replace('$', '')));

    //create a DESCENDING sorted copy to compare against (high -> low)
    const sortedPrices = [...uiPrices].sort((a, b) => b - a);

    console.log('UI Text Prices:', uiPricesText);
    console.log('UI Prices:', uiPrices);
    console.log('Sorted Prices:', sortedPrices);

    assert.deepStrictEqual(
        uiPrices,
        sortedPrices,
        'Items are not sorted by price high → low',
    );

});