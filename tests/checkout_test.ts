Feature('checkout');

Scenario('verify checkout functionality',  ({ I }) => {

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

    I.click({ byTestId: 'checkout' });

    I.fillField({ byTestId: 'firstName' }, 'John');
    I.fillField({ byTestId: 'lastName' }, 'Doe');
    I.fillField({ byTestId: 'postalCode' }, '12345');

    I.click({ byTestId: 'continue' });

    I.see('Item total: $129.94', { byTestId: 'subtotal-label' });
    I.see('Tax: $10.40', { byTestId: 'tax-label' });
    I.see('Total: $140.34', { byTestId: 'total-label' });

    I.click({ byTestId: 'finish' });
    I.see('Thank you for your order!', { byTestId: 'complete-header' });

});