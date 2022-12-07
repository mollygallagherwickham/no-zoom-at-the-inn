describe('When on the users page', () => {
  it('you can add a friend', () => {
      // sign up
      cy.visit('/users/new')
      cy.get('#submit').click()
      cy.url().should('include', '/users/new')
  
      cy.get('#first_name').type('John')
      cy.get('#last_name').type('Smith')
  
      cy.get('#email').type('JohnSmith@example.com')
      cy.get('#password').type('pasSword!2')
      cy.get('#submit').click()

      cy.contains('Log Out').click()

      // sign up
      cy.visit('/users/new')
      cy.get('#submit').click()
      cy.url().should('include', '/users/new')
  
      cy.get('#first_name').type('John2')
      cy.get('#last_name').type('Smith')
  
      cy.get('#email').type('John2mith@example.com')
      cy.get('#password').type('pasSword!2')
      cy.get('#submit').click()

      // add a friend
      cy.visit('/users/all');
      cy.get('.friendButton').contains('Add Friend')
      cy.get('.friendButton').first().click()
      cy.get('.friendButton').contains('Remove Friend')
  });
})