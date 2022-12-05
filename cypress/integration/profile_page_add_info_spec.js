describe('Profile page add info', () => {
    it('allows user to add dietary requirements to their profile page', () => {
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

      // arrives at index page
      cy.visit("/");
      // goes to profile page
      cy.visit("users/profile");

      // fills in form
      cy.get("#dietaryrequirements").type("Vegetarian"); 
      // submits
      cy.get("#submit").click();

      // sends back to profile page with update
      cy.url().should("include", "/users/profile");
      cy.contains("Vegetarian");
    })

})
