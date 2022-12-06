describe('All users page', () => {
    it('shows all users except current user', () => {

 

        // sign up
      cy.visit("/users/new");
      cy.get("#email").type("sarah@example.com");
      cy.get("#first_name").type("Sarah");
      cy.get("#last_name").type("Smith");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      cy.contains('Log Out').click()


      // sign up
      cy.visit("/users/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#first_name").type("Someone");
      cy.get("#last_name").type("Example");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      cy.visit("/users/all");
      cy.contains('Sarah Smith');
      cy.contains('Someone Example').should('not.exist');
    })
})