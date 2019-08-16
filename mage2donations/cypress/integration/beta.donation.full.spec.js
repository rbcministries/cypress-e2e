import {expect} from 'chai';

/**
* Test the running of a donation on a  live running site with test credentials.
*/
describe('Transactions', () =>  {
    context('successful', () => {
        it('add to cart, and checkout', () => {
            cy.fixture('masterCard').then( (donation) => {
                cy.visit('https://beta.donations.ourdailybread.org/');

                // Should redirect to a product page
                expect(cy.location('pathname')).to.not.equal('/');

                cy.get('#amount').type('2');

                cy.get('label[for=_recurring-no]').click();

                cy.get('#product-addtocart-button').should('be.visible').click();

                cy.location('pathname', {timeout: 10000}).should('eq', '/checkout/');

                cy.get('#customer-email', {timeout: 10000}).should('be.visible').type(donation.email);

                cy.get('input[name=firstname]:visible').type(donation.firstName);
                cy.get('input[name=lastname]:visible').type(donation.lastName);
                cy.get('input[name="street[0]"]:visible').type(donation.address1);
                cy.get('input[name=city]:visible').type(donation.city);

                cy.get('select[name=region_id]:visible')
                .select(donation.state);

                cy.get('select[name=country_id]:visible')
                .select(donation.country);

                cy.get('input[name=postcode]:visible')
                .type(donation.zip);

                cy.get('button[data-bind="click: updateAddress"]:visible').click();

                cy.get('h2.paymentdetails').should('be.visible');

                cy.get('input[name="payment[cc_number]"]').type(donation.card.number);

                cy.get('select[name="payment[cc_exp_month]"]:visible')
                .select(donation.card.month);

                cy.get('select[name="payment[cc_exp_year]"]:visible')
                .select(donation.card.year);

                cy.get('input[name="payment[cc_cid]"]:visible')
                .type(donation.card.cvv);

                cy.get('#submitDonationButton').should('be.visible').click();

                cy.location('pathname').should('eq', '/checkout/onepage/success/');
            })
        })
    })
})