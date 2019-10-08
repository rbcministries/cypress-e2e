import {assert, expect} from 'chai';

describe('Google Tag Manager', () => {
 /*
 Passes locally, but fails on build with:
  shouldGoogle Tag Manager GTM: Data Layer Loaded and English Key found:
      AssertionError: Target cannot be null or undefined.
      */

  it('GTM: Data Layer Loaded and English Key found', function () {
    cy.server();
    cy.route('siteConfigs/*.json').as('siteConfig');
    cy.route('*/translation/language?language=*').as('language');
    cy.visit('/');
    cy.wait('@siteConfig');
    cy.wait('@language');
    cy.window().then((win) => {
      assert.isDefined(win.dataLayer, 'Data Layer is defined');
      expect(win.google_tag_manager).to.have.property('GTM-PNF6KF');
    });
  });
});