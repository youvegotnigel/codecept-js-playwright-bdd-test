Feature('login');

Scenario('login to sauce demo site',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test=username]', 'standard_user');
    I.fillField('[data-test=password]', 'secret_sauce');
    I.click('[data-test=login-button]');
    I.see('Products'); 

});
