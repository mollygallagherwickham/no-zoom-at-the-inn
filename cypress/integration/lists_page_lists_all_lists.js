describe('Lists page', () => {
  it('lists all the logged in users lists', () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#first_name").type("Someone");
    cy.get("#last_name").type("Example");
    cy.get("#password").type("Passw0rd!");
    cy.get("#submit").click();

    // sign in
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("Passw0rd!");
    cy.get("#submit").click();

    // Create a list
    cy.visit("/lists/new");
    cy.get("#listName").type("Card List");
    cy.get("#submit").click();

    // Visit the lists page and only see your list
    cy.visit("/lists")
    cy.get("#lists").contains("Card List");
  })
})
