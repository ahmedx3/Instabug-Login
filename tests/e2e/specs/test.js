// https://docs.cypress.io/api/introduction/api.html

describe('Senario 1', () => {
  it('Check email doesnt exist', () => {
    cy.visit('/login');
    cy.get('input[id="emailInput"]').type('ahmedmostafa@gmail.com', { delay: 100 });
    cy.get('input[id="passwordInput"]').type('123456789A', { delay: 100 });
    cy.get('button[id="loginBTN"]').click();
    cy.wait(100);
    cy.get('div[id="emailNotExist"]').should('be.visible');
  });
});

describe('Senario 2', () => {
  it('Check email doesnt exist', () => {
    cy.visit('/login');
    cy.get('input[id="emailInput"]').type('mohamed@instabug.com', { delay: 100 });
    cy.get('input[id="passwordInput"]').type('123456789AB', { delay: 100 });
    cy.get('button[id="loginBTN"]').click();
    cy.wait(100);
    cy.get('div[id="emailNotExist"]').should('be.visible');
  });
});

describe('Senario 3', () => {
  it('Check login correct', () => {
    cy.visit('/login');
    cy.get('input[id="emailInput"]').type('mohamed@instabug.com', { delay: 100 });
    cy.get('input[id="passwordInput"]').type('12345678A', { delay: 100 });
    cy.get('button[id="loginBTN"]').click();
    cy.location('pathname').should('eq', '/welcome');
  });
});

describe('Senario 4', () => {
  it('Check textbox with wrong input', () => {
    cy.visit('/login');
    cy.get('input[id="emailInput"]').type('dddd', { delay: 100 });
    cy.wait(100);
    cy.get('div[class="v-messages__message message-transition-enter-to"]').should('be.visible');
    cy.get('div[id="emailRow"]')
      .closest('div')
      .should('have.css', 'caret-color', 'rgba(0, 0, 0, 0.87)');
  });
});
