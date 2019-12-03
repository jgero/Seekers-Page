describe("landing page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains the title", () => {
    cy.contains("h1", "GOLD");
    cy.contains("h1", "SEEKERS");
    cy.contains("h2", "SHWOAKROBATIK");
  });
});
