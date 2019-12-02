describe("navigation for shows", () => {
  beforeEach(() => {
    cy.visit("/shows");
  });

  it("has logo that navigates to invisa", () => {
    const invisaNavElement = cy.get("#invisa");
    invisaNavElement.click();
    cy.url().should("include", "/invisa");
  });

  it("has logo that navigates to fortuna", () => {
    const fortunaNavElement = cy.get("#fortuna");
    fortunaNavElement.click();
    cy.url().should("include", "/fortuna");
  });

  it("has logo that navigates to wikinger", () => {
    const wikingerNavElement = cy.get("#wikinger");
    wikingerNavElement.click();
    cy.url().should("include", "/wikinger");
  });

  it("has logo that navigates to stage", () => {
    const stageNavElement = cy.get("#stage");
    stageNavElement.click();
    cy.url().should("include", "/stage");
  });
});
