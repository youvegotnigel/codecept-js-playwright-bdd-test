Feature('product');

Scenario('verify adding items to cart',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
    
    I.click({ byTestId: 'add-to-cart-sauce-labs-backpack' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-bike-light' });
    I.click({ byTestId: 'add-to-cart-sauce-labs-fleece-jacket' });

    I.see('3', { byTestId: 'shopping-cart-badge' });

});