describe('Profile page add info', () => {
    it('allows user to add dietary requirements to their profile page', () => {
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
      cy.get("#message").type("Brussels Allergy"); 
      // submits
      cy.get("#diet_req_button").click();

      // sends back to profile page with update
      cy.url().should("include", "/users/profile");
      cy.contains("Brussels Allergy");
    })

})
