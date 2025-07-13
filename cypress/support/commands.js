Cypress.Commands.add('openRegistrationForm', () => {
    cy.visit('https://qauto.forstudy.space/', { failOnStatusCode: false });
  
    cy.get('input[formcontrolname="email"]', { timeout: 10000 })
      .should('be.visible')
      .type('guest');
  
    cy.get('input[formcontrolname="password"]')
      .should('be.visible')
      .type('welcome2qauto');
  
    cy.contains('Sign In').click();
  
    cy.contains('Sign up', { timeout: 10000 }).click();
    cy.contains('Register').should('be.visible');
  });

  Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
      // turn off original log
      options.log = false
      // create our own log with masked message
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length),
      })
    }
  
    return originalFn(element, text, options)
  })