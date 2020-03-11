context('Devotional', () => {
	it('Can navigate devotional content', () => {
		cy.visit('/');

		// Scroll through page
		cy.get('footer').scrollIntoView();

		// TODO check footer for correct location

		cy.scrollTo('top');

		cy.get('.today-title>a:first')
			.should('be.visible')
			.click();
		cy.get('.devo-title')
			.should('be.visible')
			.then(todayTitle => {
				cy.get('.error-page-wrapper').should('not.exist');

				cy.get('footer').scrollIntoView();

				// Navigate with calendar
				cy.get('.calendar-toggle a:first')
					.should('be.visible')
					.click();

				// Unconsistent to do in an automated fashion, currently
				// cy.get('.rw-state-selected')
				// 	.next()
				// 	.should('be.visible')
				// 	.click();

				// cy.get('.devo-title')
				// 	.should('be.visible')
				// 	.then($el => {
				// 		cy.wait(3000);
				// 		expect(todayTitle.text()).to.not.equal($el.text());
				// 	});
			});
	});
});
