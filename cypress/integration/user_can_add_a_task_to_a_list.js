describe('When a user has created a list', () => {
    it('displays the lists page', () => {
        // sign up
        cy.visit('/users/new')
        cy.get('#submit').click()
        cy.url().should('include', '/users/new')
  
        cy.get('#first_name').type('Andy')
        cy.get('#last_name').type('Kettlety')
        cy.get('#email').type('andy@gmail.com')
        cy.get('#password').type('Passw0rd!')
        cy.get('#submit').click()

        // create a list
        cy.visit('/lists');
        cy.get('#new-list').click();
        cy.url().should('include', '/lists/new');
        cy.get('#listName').type('Card List');
        cy.get('#submit').click();
        cy.url().should('include', '/lists');
        cy.get('#lists').should('have.text', 'Card List')

        // Add task to first list
        // cy.visit('/lists');
        // cy.contains('Add a Task').click()
        // cy.get('#lists form input').type('Todo item');
        // cy.get('#lists form button').click();
    });
})