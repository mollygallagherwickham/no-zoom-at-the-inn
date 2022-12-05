describe('Sign in page', () => {
    it('has a form', () => {
      cy.visit('/sessions/new')
      cy.get('#new-session-form').contains('Email')
    })

    it('allows user to log in', () => {
      // sign up
      cy.visit("/users/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#first_name").type("Someone");
      cy.get("#last_name").type("Example");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      // result is the index page visit
      
      cy.url().should("include", "/");
      cy.contains("Hey, Someone.");
    })

    it('does not allow user to log in due to incorrect password', () => {
      // sign up
      cy.visit("/users/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#first_name").type("Someone");
      cy.get("#last_name").type("Example");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("passw");
      cy.get("#submit").click();

      // result is the login page
      cy.url().should("include", "/");
      cy.contains("Email");
    })

    it('does not allow user to log in due to user not existing', () => {
      // sign up
      cy.visit("/users/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#first_name").type("Someone");
      cy.get("#last_name").type("Example");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("some@example.com");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      // result is the login page
      cy.url().should("include", "/");
      cy.contains("Email");
    })
})
