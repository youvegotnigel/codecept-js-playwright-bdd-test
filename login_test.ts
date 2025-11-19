Feature('login');

Scenario('test something',  ({ I }) => {

    I.amOnPage('/');
    I.fillField('username', 'standard_user');
    I.fillField('password', 'secret_sauce');
    I.click('Login');
    I.see('Products'); 

});
