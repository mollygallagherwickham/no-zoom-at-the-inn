describe('Home page', () => {
    xit('has a title', () => {
      cy.visit('/')
      cy.get('#title').contains('No Zoom at the Inn')
    })
})