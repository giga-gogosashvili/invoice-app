/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("My First Test", () => {
  it("Visit invoice list page", () => {
    cy.visit("http://localhost:3000/invoices");
    cy.contains("h1", "Invoices");
    cy.contains("button", "New Invoice");
    cy.get('[cy-data="open_RT3080"]').click();

    // cy.contains("button", "New Invoice");
  });
});
