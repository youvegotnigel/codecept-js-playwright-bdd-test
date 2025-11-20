// in this file you can append custom step methods to 'I' object

const { I } = inject();

export = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login(username: string, password: string) {

      I.fillField({ byTestId: 'username' }, username);
      I.fillField({ byTestId: 'password' }, password);
      I.click({ byTestId: 'login-button' });

      I.see('Products'); 
    }

  });
}
