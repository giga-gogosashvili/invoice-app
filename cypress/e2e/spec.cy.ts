/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("My First Test", () => {
  it("Visit invoice list page", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("h1", "Invoices");
    cy.get('[cy-data="open"]').click();
    //to do sprawdzic co sie wyswietla cy.contains
  });
});
