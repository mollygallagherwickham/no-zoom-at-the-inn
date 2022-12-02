describe('Nav Bar', () => {
    it('shows log in and sign up button when user is not logged in', () => {
      // sign up
      cy.visit("/");
      cy.url().should("include", "/");
      cy.contains("Sign up");
    //   cy.get("#email").type("someone@example.com");
    //   cy.get("#first_name").type("Someone");
    //   cy.get("#last_name").type("Example");
    //   cy.get("#password").type("Passw0rd!");
    //   cy.get("#submit").click();

    //   // sign in
    //   cy.visit("/sessions/new");
    //   cy.get("#email").type("someone@example.com");
    //   cy.get("#password").type("Passw0rd!");
    //   cy.get("#submit").click();

    //   // result is the index page visit
    })

    it('shows log out button when user is logged in', () => {
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
        cy.url().should("include", "/");
        cy.contains("Log Out");

    })
})