describe("basic content", () => {
  beforeEach(() => {});

  it("on the landing page", () => {
    cy.visit("/");
    cy.get("h1");
    cy.get("p");
  });

  it("on the shows page", () => {
    cy.visit("/shows");
    cy.get("h1");
    cy.get("p");
  });

  it("on the invisa page", () => {
    cy.visit("/shows/invisa");
    cy.get("h1");
    cy.get("p");
  });

  it("on the fortuna page", () => {
    cy.visit("/shows/fortuna");
    cy.get("h1");
    cy.get("p");
  });

  it("on the wikinger page", () => {
    cy.visit("/shows/wikinger");
    cy.get("h1");
    cy.get("p");
  });

  it("on the stage page", () => {
    cy.visit("/shows/stage");
    cy.get("h1");
    cy.get("p");
  });
});
