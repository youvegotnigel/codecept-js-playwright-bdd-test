Feature('login');

Scenario('verify login with valid credentials',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test=username]', 'standard_user');
    I.fillField('[data-test=password]', 'secret_sauce');
    I.click('[data-test=login-button]');
    I.see('Products'); 

});


Scenario('verify login as locked out user',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test=username]', 'locked_out_user');
    I.fillField('[data-test=password]', 'secret_sauce');
    I.click('[data-test=login-button]');
    I.see('Epic sadface: Sorry, this user has been locked out.'); 

});


Scenario('verify login with empty username',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test=password]', 'secret_sauce');
    I.click('[data-test=login-button]');
    I.see('Epic sadface: Username is required'); 

});


Scenario('verify login with empty password',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test=username]', 'locked_out_user');
    I.click('[data-test=login-button]');
    I.see('Epic sadface: Password is required'); 

});
