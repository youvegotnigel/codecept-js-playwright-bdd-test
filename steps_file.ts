// in this file you can append custom step methods to 'I' object

const { I } = inject();

export = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login(username: string, password: string) {
      I.fillField('[data-test="username"]', username);
      I.fillField('[data-test="password"]', password);
      I.click('[data-test="login-button"]');
      
      I.see('Products'); 
    }

  });
}
