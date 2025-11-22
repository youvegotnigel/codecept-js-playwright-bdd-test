Feature('login');

Scenario('verify login with valid credentials',  ({ I }) => {

    I.amOnPage('/');
    I.see('Accepted usernames are:');

    I.fillField('[data-test="username"]', 'standard_user');
    I.fillField('[data-test="password"]', 'secret_sauce');
    I.click('[data-test="login-button"]');

    I.see('Products'); 
    I.dontSee('Accepted usernames are:');

});


Scenario('verify login as locked out user',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test="username"]', 'locked_out_user');
    I.fillField('[data-test="password"]', 'secret_sauce');
    I.click('[data-test="login-button"]');
    I.see('Epic sadface: Sorry, this user has been locked out.'); 

});


Scenario('verify login with empty username',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test="password"]', 'secret_sauce');
    I.click('[data-test="login-button"]');
    I.see('Epic sadface: Username is required'); 

});


Scenario('verify login with empty password',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('[data-test="username"]', 'locked_out_user');
    I.click('[data-test="login-button"]');
    I.see('Epic sadface: Password is required'); 

});


Scenario('verify logout',  ({ I }) => {

    I.amOnPage('/');

    I.fillField('[data-test="username"]', 'standard_user');
    I.fillField('[data-test="password"]', 'secret_sauce');
    I.click('[data-test="login-button"]');

    I.see('Products'); 
    
    I.click('#react-burger-menu-btn');              // open menu
    I.click('[data-test="logout-sidebar-link"]');   // click logout

    I.see('Accepted usernames are:');
    I.dontSee('Products'); 

});
