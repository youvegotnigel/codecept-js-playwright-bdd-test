Feature('footer link');

Scenario('verify twitter footer links',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
    
    I.click({ byTestId: 'social-twitter' });

    I.switchToNextTab();
    I.seeInCurrentUrl('https://x.com/saucelabs');

});


Scenario('verify facebook footer links',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
    
    I.click({ byTestId: 'social-facebook' });

    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.facebook.com/saucelabs');

});


Scenario('verify linkedin footer links',  ({ I }) => {

    I.amOnPage('/');
    I.login("standard_user", "secret_sauce");
    
    I.click({ byTestId: 'social-linkedin' });

    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.linkedin.com/company/sauce-labs/');

});