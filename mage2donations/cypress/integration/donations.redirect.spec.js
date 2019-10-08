import {expect} from 'chai';

describe('Magento', () =>  {
    context('Redirects', () => {
        it('Should redirect to a product page', () => {
                cy.visit('https://donations.ourdailybread.org/');
                expect(cy.location('pathname')).to.not.equal('/');
        })
    })
})