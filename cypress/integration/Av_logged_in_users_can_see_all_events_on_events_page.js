// const { it } = require("mocha");

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
      cy.get('#eventName').type('Crimbo Party');
      cy.get('#eventDate').type('2022-12-28');
      cy.get('#location').type('Manchester');
      cy.get("#submit").click();
      cy.get('.events').should('contain', 'Someone');

    })

    it('can order events by earliest to latest date', () => {
      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      cy.visit("events/new");
      cy.get('#eventName').type('The Jingle Bell Ball');
      cy.get('#eventDate').type('2022-12-29');
      cy.get('#location').type('Manchester');
      cy.get("#submit").click();
      cy.get('.events').should('contain', 'Someone');

      cy.visit("events/new");
      cy.get('#eventName').type('Christmas Day');
      cy.get('#eventDate').type('2022-12-25');
      cy.get('#location').type('Brighton');
      cy.get("#submit").click();
      cy.get('.eventNameClass').eq(0).should('contain.text', 'Christmas');
  })

    it('shows 0 attending when new event added', () => {
      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      cy.visit("/events");
      cy.get('.eventAttendingNumber').eq(0).should('contain', '0 attending');
    })

    it('shows 1 attending when someone clicks attend', () => {
      // sign in
      cy.visit("/sessions/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("Passw0rd!");
      cy.get("#submit").click();

      cy.visit("/events");
      cy.get(".attend-button").first().click();
      cy.get('.eventAttendingNumber').should('contain', '1 attending');
    })
})