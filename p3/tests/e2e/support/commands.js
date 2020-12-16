// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('#email-field').type(email);
  cy.get('#password-field').type(password);
  cy.get('#login-btn').click();
});

Cypress.Commands.add('logout', () => {
  cy.visit('/');
  cy.get('.auth-button').click();
});

Cypress.Commands.add('register', (name, email, password) => {
  cy.visit('/register');
  cy.get('#name-field').type(name);
  cy.get('#email-field').type(email);
  cy.get('#password-field').type(password);
  cy.get('#register-btn').click();
});

Cypress.Commands.add('showForbidden', () => {
  cy.location('pathname', { timeout: 500 }).should('eq', '/forbidden');
  cy.contains('h1', 'Whoops!');
  cy.contains('h3', 'It looks like you took a wrong turn.');
});

Cypress.Commands.add('checkRecipeOne', () => {
  cy.contains('h4', 'Ingredients');
  cy.get('[alt="Fougasse"]').should('be.visible').and(($img) => {
    expect($img[0].naturalWidth).to.be.greaterThan(0);
  });
});
