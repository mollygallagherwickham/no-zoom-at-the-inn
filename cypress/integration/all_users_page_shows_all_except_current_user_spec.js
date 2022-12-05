describe('All users page', () => {
    it('shows all users except current user', () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#first_name").type("Someone");
    cy.get("#last_name").type("Example");
    cy.get("#password").type("Passw0rd!");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("Passw0rd!");
    cy.get("#submit").click();

    cy.visit("/");
    cy.visit("/users/all");
    cy.contains('Sarah Smith');
    cy.contains('Someone Example').should('not.exist');
    })
})