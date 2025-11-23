Feature('hooks');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('example #1 scenario',  ({ I }) => {

    I.see('Swag Labs');

});

Scenario('example #2 scenario',  ({ I }) => {

    I.see('Password for all users:');

});

Scenario('example #3 scenario',  ({ I }) => {

    I.see('Accepted usernames are:');

});

After(({ I }) => {
    // This is to fail on purpose
    I.see('Something to fail at after hook');
});