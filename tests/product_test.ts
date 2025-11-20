Feature('product');

Scenario('verify adding items to cart',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
       
    
    I.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    I.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    I.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');

    I.see('3', '[data-test="shopping-cart-badge"]');

});