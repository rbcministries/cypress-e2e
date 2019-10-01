import 'cypress-react-unit-test'
import React from 'react'


describe("Translation Admin", ()=>{
  it("Admin dashboard button works and translate admin works", async ()=> {

    var textArray = [
      "Cypress",
      "Admin",
      "Translation",
      "Text",
      "ODB",
      "Engine",
      "Test",
      "Random"
    ];
    let testTerm = "Cypress Test: " + textArray[Math.floor(Math.random()*textArray.length)] + " " + textArray[Math.floor(Math.random()*textArray.length)] + " " + textArray[Math.floor(Math.random()*textArray.length)];

    await cy.visit('/');
    cy.login();
    cy.get('.dropbtn > .fa').click();
    cy.get('.dropdown-content > div > .mobile-menu-action').click();
    cy.get('.box.translation-box').click();
    cy.location('pathname').should('eq','/admin/translation');
    cy.get('[data-cy="expansionIcon-Admin - General"]').click();
    cy.get('[data-cy="cypress.cypressTest"] [data-cy=editTermButton]').first().click();
    cy.get('[data-cy="editTermField"]').should('be.visible');

    // Comment out additional testing while we work on secure authentication with active tokenization
    // Connect to AWS API gateway and test updating the Translation engine database
    /*
    cy.get('[name="cypress.cypressTest-textfield"]').clear();
    cy.get('[name="cypress.cypressTest-textfield"]').type(testTerm);
    cy.get('[data-cy="cypress.cypressTest-confirmButton"]').click();
    cy.get('[data-cy="cypress.cypressTest-labelField"]').should('have.text',testTerm);
    */
  })
});