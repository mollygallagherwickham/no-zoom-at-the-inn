describe('Home page', () => {
    it('has a title', () => {
      cy.visit('/')
      cy.get('#title').contains('No Zoom at the Inn')
    })
})