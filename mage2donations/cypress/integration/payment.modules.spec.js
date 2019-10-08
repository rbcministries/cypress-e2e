describe.skip( 'Payment Modules', () => {
	it('Test that one time selects Stripe', () => {
		cy.server();
		cy.route('https://dev.mage2.org/checkout').as('checkoutpage');


		/* TEST: One time selection results in Stripe */
		cy.visit(('https://dev.mage2.org/intm4.html'));
		cy.wait(2000);
		cy.get('#amount').click().type('4.11');
		cy.get('[data-cy=giveonce]').click();
		cy.get('#product-addtocart-button').click();

		cy.wait(12000);

		cy.get('#customer-email').click().type('noreply@odb.org');
		cy.get('#billingaddress [name=firstname]').click().type('Peter');
		cy.get('#billingaddress [name=lastname]').click().type('Postma');
		cy.get('#billingaddress [name="street[0]"]').click().type('3000 k ave');
		cy.get('#billingaddress [name=city]').click().type('G.R.');
		cy.get('#billingaddress [name=region_id]').select('33');
		cy.get('#billingaddress [name=postcode]').click().type('49512');
		cy.get('.payment-method._active button.primary.action-update').click();

		cy.get('#activate_stripe').should("exist");

	});


	it('Test that recurring payments still user Paperless', () => {

		/* TEST: One recurring selection results in Paperless */
		cy.visit(('https://dev.mage2.org/intm4.html'));
		cy.wait(2000);
		cy.get('#amount').click().type('4.11');
		cy.get('[data-cy=givemonthly]').click();
		cy.get('#product-addtocart-button').click();

		cy.wait(9000);


		cy.get('#customer-email').click().type('noreply@odb.org');
		cy.get('#billingaddress [name=firstname]').click().type('Peter');
		cy.get('#billingaddress [name=lastname]').click().type('Postma');
		cy.get('#billingaddress [name="street[0]"]').click().type('3000 k ave');
		cy.get('#billingaddress [name=city]').click().type('G.R.');
		cy.get('#billingaddress [name=region_id]').select('33');
		cy.get('#billingaddress [name=postcode]').click().type('49512');
		cy.get('.payment-method._active button.primary.action-update').click();

		cy.get('#activate_stripe').should("not.exist");
	})
});