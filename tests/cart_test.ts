Feature('cart');

Scenario('verify add to cart functionality',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
    
    I.click({ byTestId: 'add-to-cart-sauce-labs-backpack' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-bike-light' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-fleece-jacket' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-bolt-t-shirt' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-onesie' });
    I.click({ byTestId: 'add-to-cart-test.allthethings()-t-shirt-(red)' });

    I.see('6', { byTestId: 'shopping-cart-badge' });

    I.click({ byTestId: 'shopping-cart-link' });

    I.seeTextEquals('Sauce Labs Bike Light', { byTestId: 'item-0-title-link' });
    I.seeTextEquals('Sauce Labs Bolt T-Shirt', { byTestId: 'item-1-title-link' });
    I.seeTextEquals('Sauce Labs Onesie', { byTestId: 'item-2-title-link' });
    I.seeTextEquals('Test.allTheThings() T-Shirt (Red)', { byTestId: 'item-3-title-link' });
    I.seeTextEquals('Sauce Labs Backpack', { byTestId: 'item-4-title-link' });
    I.seeTextEquals('Sauce Labs Fleece Jacket', { byTestId: 'item-5-title-link' });

});