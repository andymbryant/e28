// https://docs.cypress.io/api/introduction/api.html

describe('Home', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('p', 'Or you can filter them by category on the left. Enjoy!');
  });
});

describe('Recipe list', () => {
  it('Filter cards', () => {
    cy.visit('/');
    cy.get('.card').should('have.length', 8);
    cy.get('#dessert').click();
    cy.get('.card').should('have.length', 7);
    cy.get('#pastry').click();
    cy.get('.card').should('have.length', 5);
  });
});

describe('Recipe detail', () => {
  it('Shows detail page with image', () => {
    cy.visit('/recipe-detail/1');
    cy.checkRecipeOne();
  });
});

describe('Login action', () => {
  it('Logs in and goes home', () => {
    Cypress.Cookies.debug(true);
    cy.login('a@b.com', 'abc12345');
    cy.location('pathname').should('eq', '/');
    cy.contains('[data-test="user-name"]', 'Andy');
  });
});

describe('Like action', () => {
  it('Likes an item, color changes, and it appears in favorites', () => {
    cy.login('a@b.com', 'abc12345');
    cy.location('pathname').should('eq', '/');
    cy.get("[data-test='favorite-1']").click();
    cy.get("[data-test='heart-icon-1']").should('have.css', 'color').and('eq', 'rgb(255, 192, 203)');
    cy.visit('/favorites');
    cy.location('pathname', { timeout: 500 }).should('eq', '/favorites');
    cy.checkRecipeOne();
  });
});

describe('Cart action', () => {
  it('Carts an item, color changes, and it appears in cart', () => {
    cy.login('a@b.com', 'abc12345');
    cy.location('pathname').should('eq', '/');
    cy.get("[data-test='cart-1']").click();
    cy.get("[data-test='cart-icon-1']").should('have.css', 'color').and('eq', 'rgb(0, 192, 150)');
    cy.visit('/cart');
    cy.location('pathname', { timeout: 500 }).should('eq', '/cart');
    cy.contains('li', '6 to 8 corn tortillas OR tostadas');
  });
});

describe('Cart action', () => {
  it('Carts an item, color changes, and it appears in cart', () => {
    cy.login('a@b.com', 'abc12345');
    cy.logout();
    cy.contains('button', 'Login');
    cy.contains('button', 'Register');
  });
});
