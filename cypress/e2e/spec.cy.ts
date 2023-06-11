describe("My First Test", () => {
  it("Visit invoice list page", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("h1", "Invoices");
    cy.contains("p", "are");
    cy.contains("button", "Read");
  });
});
