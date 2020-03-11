/**
 * @todo break this into its own specs so that it can be run in parallel
 */
context('Geocentric', () => {
    it('All countries can access devotional', () => {
        cy.fixture('countries').then((countries) => {
            for (const key in countries) {
                if (countries.hasOwnProperty(key)) {
                    cy.visit('/?country=' + key);

                    // Scroll through page
                    cy.get('footer').scrollIntoView();

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
                }
            }
        })
    })
})