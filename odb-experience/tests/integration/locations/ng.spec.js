context('Geocentric', () => {
	it('Get correct geocentric content for Nigeria', () => {
		const country = 'ng';
		const address = 'Lagos';

		cy.visit('/?country=' + country);

		// Scroll through page
		cy.get('footer').scrollIntoView();

		// Check footer for correct location
		cy.get('footer address')
			.contains(address)
			.should('be.visible');

		cy.scrollTo('top');

		cy.get('.today-title>a:first')
			.should('be.visible')
			.click();
		cy.get('.devo-title')
			.should('be.visible')
			.then(todayTitle => {
				cy.get('.error-page-wrapper').should('not.exist');

				cy.get('footer').scrollIntoView();

				// Scroll through page
				cy.get('footer').scrollIntoView();

				// Check that footer still contains the right location
				cy.get('footer address')
					.contains(address)
					.should('be.visible');
			});
	});
});
