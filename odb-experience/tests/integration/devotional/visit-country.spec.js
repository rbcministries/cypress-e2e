context('Geocentric', () => {
	it('Random country can access devotional', () => {
		cy.fixture('countries').then(countries => {
			const countryArr = Object.keys(countries);
			const countryCode =
				countryArr[Math.floor(Math.random() * countryArr.length)];

			// for (const key in countries) {
			//     if (countries.hasOwnProperty(key)) {
			cy.visit('/?country=' + countryCode);

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

					cy.get('.today-img')
						.should('be.visible')
						.scrollIntoView();

					// Navigate with calendar
					// Unconsistent to do in an automated fashion, currently
					// cy.get('.calendar-toggle a:first')
					//     .should('be.visible')
					//     .click();
					// cy.get('.rw-state-selected')
					//     .next()
					//     .should('be.visible')
					//     .click();

					// cy.wait(2000);

					// cy.get('.devo-title')
					//     .should('be.visible')
					//     .then($el => {
					//         cy.wait(3000);
					//         expect(todayTitle.text()).to.not.equal($el.text());
					//     });
				});
		});
	});
});
