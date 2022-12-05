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
    it('can create a new event', () => {
      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();
    
      // can create an event 
      
      cy.visit("/events");
      cy.url().should("include", "/events");

      // Can see all events

      cy.visit("events/new");
      cy.get('#new-event-form').find('[type="text"]').type('Crimbo Party');
      cy.get('#new-event-form').submit();
      cy.get('.events').should('contain', 'Someone');
      


    })
  })