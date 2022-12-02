describe('When a user has created a list', () => {
    beforeEach(() => {
        // create a list
        cy.visit('/lists');
        cy.get('#new-list').click();
        cy.url().should('include', '/lists/new');
        cy.get('#listName').type('Card List');
        cy.get('#submit').click();
        cy.url().should('include', '/lists');
        cy.get('#lists').should('include', 'Card List');
    });
    
    
    // it('can add an item to the list', () => {
    //     cy.visit('/lists');
    //     cy.get('#add-task').should('contain', 'Add a Task');
    //     cy.get('#add-task').click();
    //     cy.get('#task-name').type('Mum & Dad');
    //     cy.get('#submit-task').click();
    //     cy.url().should('include', '/lists');
    // });
  
})