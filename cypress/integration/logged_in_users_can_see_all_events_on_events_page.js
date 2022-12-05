describe('Logged in user', () => {
    it('can go to the events page', () => {
      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();
    
      // Can go to events page
      
      cy.visit("/events");
      cy.url().should("include", "/events");
      
  
      
    })
  })