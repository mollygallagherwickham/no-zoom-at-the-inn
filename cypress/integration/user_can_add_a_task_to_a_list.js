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
        cy.get('#lists').contains('Card List')

        // Add task to first list
        

        // Click on list to view that list
        cy.contains('Card List').click();
        cy.url().should('include', '/lists/view?');
        cy.contains('Add a Task').click()
        cy.get('#task-name').type('Todo item');
        cy.get('#submit-task').click();
        cy.get("#list-container").contains('Card List');
        cy.get("#list-container").contains('Todo item');

        cy.get(".check").click();
        cy.reload();
        cy.get(".check").should('be.checked')
        cy.contains('Add a Task').click();
        cy.get('#task-name').type('Get lots of food');
        cy.contains('Submit Task').click();
        cy.get("#list-container").contains('Get lots of food');
    });
})