describe("My First Test", () => {
  it("Visit invoice list page", () => {
    cy.visit("http://localhost:3000/invoice-list");
  });
});
