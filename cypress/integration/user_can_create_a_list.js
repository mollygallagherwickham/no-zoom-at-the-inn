describe('Link to list on homepage', () => {
  it('user click on link to the list', () => {
    cy.visit('/')
    cy.get('#lists-link').should('contain', 'View my lists')
    cy.get('#lists-link').click();
    cy.url().should('include', '/lists')
    cy.contains('a', 'New List');
  })

  it('user click on New List to create list', () => {
    cy.visit('/lists')
    cy.get('#new-list').click();
    cy.url().should('include', '/lists/new')
    cy.get('#listName').type('Card List')
    cy.get('#submit').click();
    cy.url().should('include', '/lists');
  })
})