
describe('Google Search', () => {

  // Search from homepage (English) test: https://odb.org/2013/08/22/thumbs-up/
  it('(Desktop) Search field visible on homepage', function () {
    cy.viewport(1440, 900);
    cy.visit('/');
    cy.get('.icon-search')
        .click();
    cy.get('input[name=search]')
        .click()
        .type("Pandora")
        .type('{enter}');
    cy.get('.gsc-results.gsc-webResult').contains("Pandora is one");
  });

  // Spanish search test: https://nuestropandiario.org/2013/08/me-gusta/
  it('Spanish Search', function () {
    cy.visit('/search?q=Pandora&site-config=npd');
    cy.get('.gsc-results.gsc-webResult').contains("Pandora es una");
  });
});