function getRandomString() {
  return Math.random().toString(36).substring(4);
}

describe('Home', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('p', 'Or you can filter them by category on the left. Enjoy!');
  });
});

describe('Recipe list', () => {
  it('Filtering updates card numbers', () => {
    cy.visit('/');
    cy.get('.card').should('have.length', 8);
    cy.get('#dessert').click();
    cy.get('.card').should('have.length', 7);
    cy.get('#pastry').click();
    cy.get('.card').should('have.length', 5);
  });
});

describe('Forbidden pages and redirects', () => {
  it('Shows forbidden page', () => {
    cy.visit('/forbidden');
    cy.showForbidden();
  });
  // Users cannot visit these pages if not logged in
  it('Redirect from favorites page', () => {
    cy.visit('/favorites');
    cy.showForbidden();
  });
  it('Redirect from cart page', () => {
    cy.visit('/cart');
    cy.showForbidden();
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
    cy.login('a@b.com', 'abc12345');
    cy.location('pathname').should('eq', '/');
    cy.contains('[data-test="user-name"]', 'Andy');
  });
});

describe('Register action', () => {
  it('Registers new user', () => {
    // Generate random login
    // TODO: This is not ideal, should set up test database and teardown after every test
    const name = getRandomString();
    const email = `${name}@${name}.com`;
    const password = getRandomString();
    cy.register(name, email, password);
    cy.location('pathname').should('eq', '/');
    cy.contains('[data-test="user-name"]', name);
  });
});

describe('Like action', () => {
  it('Likes an item, color changes, and it appears in favorites', () => {
    cy.login('a@b.com', 'abc12345');
    cy.location('pathname', { timeout: 500 }).should('eq', '/');
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
    cy.location('pathname', { timeout: 1000 }).should('eq', '/');
    cy.get("[data-test='cart-1']").click();
    cy.get("[data-test='cart-icon-1']").should('have.css', 'color').and('eq', 'rgb(0, 192, 150)');
    cy.visit('/cart');
    cy.location('pathname', { timeout: 1000 }).should('eq', '/cart');
  });
});

describe('Logout action', () => {
  it('Logs user in and out and checks status', () => {
    cy.login('a@b.com', 'abc12345');
    cy.logout();
    cy.contains('button', 'Login');
    cy.contains('button', 'Register');
  });
});

describe('404', () => {
  it('Display 404 page', () => {
    cy.visit('/404');
    cy.location('pathname', { timeout: 1000 }).should('eq', '/404');
    cy.contains('h1', 'Not Found');
  });
  it('Display 404 page', () => {
    cy.visit('/abcd');
    cy.contains('h1', 'Not Found');
  });
});
