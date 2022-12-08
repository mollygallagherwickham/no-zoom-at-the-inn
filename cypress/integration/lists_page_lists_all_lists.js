describe('Lists page', () => {
  it('lists all the logged in users lists', () => {
    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("Passw0rd!");
    cy.get("#submit").click();

    // View the lists page
    cy.visit("/lists")
    cy.get("h4").contains("You have not got a list yet.")
    cy.contains("New List").click()

    // Create a list
    cy.get("#listName").type("Card List");
    cy.get("#submit").click();

    // Visit the lists page and only see your list
    cy.visit("/lists")
    cy.get("h4").contains("Your lists:")
    cy.get("#lists").contains("Card List");
  })
})
