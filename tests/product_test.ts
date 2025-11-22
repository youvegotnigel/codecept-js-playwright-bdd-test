import assert from 'assert';

Feature('product');

Scenario('verify add/remove items from cart',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
    
    I.click({ byTestId: 'add-to-cart-sauce-labs-backpack' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-bike-light' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-fleece-jacket' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-onesie' });
    I.click({ byTestId: 'add-to-cart-test.allthethings()-t-shirt-(red)' });

    I.see('5', { byTestId: 'shopping-cart-badge' });

    I.click({ byTestId: 'remove-sauce-labs-bike-light' });
    I.click({ byTestId: 'remove-sauce-labs-fleece-jacket' });

    I.see('3', { byTestId: 'shopping-cart-badge' });

});


Scenario('verify price sorting low to high', async ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");

    I.selectOption({ byTestId: 'product-sort-container' }, 'Price (low to high)');

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

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");

    I.selectOption({ byTestId: 'product-sort-container' }, 'Price (high to low)');

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


Scenario('verify name sorting (A to Z)', async ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");

    I.selectOption({ byTestId: 'product-sort-container' }, 'Name (A to Z)');

    //const inventoryItemNames: string[] = await I.grabTextFromAll({ byTestId: 'inventory-item-name' });
    const inventoryItemNames: string[] = await I.grabTextFromAll('.inventory_item_name');

    const sortedInventoryItemNames = [...inventoryItemNames].sort((a, b) => a.localeCompare(b));

    console.log('Inventory Item Names:', inventoryItemNames);
    console.log('Sorted Inventory Item Names:', sortedInventoryItemNames);

    assert.deepStrictEqual(
        inventoryItemNames,
        sortedInventoryItemNames,
        'Items are not sorted by name A → Z',
    );

});


Scenario('verify name sorting (Z to A)', async ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");

    I.selectOption({ byTestId: 'product-sort-container' }, 'Name (Z to A)');

    //const inventoryItemNames: string[] = await I.grabTextFromAll({ byTestId: 'inventory-item-name' });
    const inventoryItemNames: string[] = await I.grabTextFromAll('.inventory_item_name');

    //create a DESCENDING sorted copy to compare against (Z -> A)
    const sortedInventoryItemNames = [...inventoryItemNames].sort((a, b) => b.localeCompare(a));

    console.log('Inventory Item Names:', inventoryItemNames);
    console.log('Sorted Inventory Item Names:', sortedInventoryItemNames);

    assert.deepStrictEqual(
        inventoryItemNames,
        sortedInventoryItemNames,
        'Items are not sorted by name Z → A',
    );

});


Scenario('verify sauce labs backpack', async ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");

    const image_source = await I.grabAttributeFrom({ byTestId: 'inventory-item-sauce-labs-backpack-img' }, 'src');

    assert.deepStrictEqual(
        image_source,
        '/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg',
        `Backpack image src does not include expected filename. Actual: "${image_source}"`,
    );

});


Scenario('verify sauce labs backpack with problem user', async ({ I }) => {

    I.amOnPage('/');
    I.login("problem_user", "secret_sauce");

    const image_source = await I.grabAttributeFrom({ byTestId: 'inventory-item-sauce-labs-backpack-img' }, 'src');

    assert.deepStrictEqual(
        image_source,
        '/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg',
        `Backpack image src does not include expected filename. Actual: "${image_source}"`,
    );

});