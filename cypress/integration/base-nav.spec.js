describe("nav bar on base url", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has logo that navigates pack to base url", () => {
    const logoNavElement = cy.get(".svgContainer");
    logoNavElement.click();
    cy.url().should("include", "/");
  });

  it("has nav element with right description that navigates to shows", () => {
    const showNavElement = cy.contains("li a", "Shows");
    showNavElement.click();
    cy.url().should("include", "/shows");
  });

  it("has nav element with right description that navigates to galas", () => {
    const showNavElement = cy.contains("li a", "Galas");
    showNavElement.click();
    cy.url().should("include", "/galas");
  });

  it("has nav element with right description that navigates to contact", () => {
    const showNavElement = cy.contains("li a", "Kontakt");
    showNavElement.click();
    cy.url().should("include", "/contact");
  });
});
