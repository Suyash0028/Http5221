describe('template spec', () => {
  it('passes', () => {
    cy.visit('S-Lab-2-codestandards.html')
  });

  // Part 1: Complete the form
  describe('Complete the form',() => {
    it('Should complete the form with expected values', () => {
      cy.visit('S-Lab-2-codestandards.html');
      cy.get('.login__username').type('username').should('have.value',"username");
      cy.get('.login__password').type('pass').should('have.value',"pass");
      cy.get('.login__button').click();
    });
  });

  // Part 2: Submit the form
  describe ('Submit the form', () => {
    it('Should be able to submit the form with expected values', () => {
      cy.visit('S-Lab-2-codestandards.html');
      cy.get('.login__username').type('username').should('have.value',"username");
      cy.get('.login__password').type('pass').should('have.value',"pass");
      cy.get('.login__button').click();
      cy.get('.output__user').should('contain.text','username');
      cy.get('.output__pass').should('contain.text','pass');
      cy.get(".output").should('be.visible');
    });
  });

  // Part 3: Test to fail
  describe('Test to Fail', () => {
    it('Should highlight the username box if it is empty on form submit', () => {
      cy.visit('S-Lab-2-codestandards.html');
      cy.get('.login__password').type('pass');
      cy.get('.login__button').click();
      cy.get('.login__username').should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus');
    });

    it('Should highlight the password box if it is empty on form submit', () => {
      cy.visit('S-Lab-2-codestandards.html');
      cy.get('.login__username').type('username');
      cy.get('.login__button').click();
      cy.get('.login__password').should('have.css', 'background-color', 'rgb(255, 0, 0)').should('have.focus');
    });
  });
});