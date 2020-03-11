describe('RefTagger', () => {
	beforeEach(function() {
		cy.visit('/today');
	});

	/*
	 * Scan devotional for refTagger references
	 */
	it('refTagger on the Devotional', () => {
		cy.wait(2000);

		// Get the references
		cy.get('.rtBibleRef').then($refs => {
			// there should be references
			expect($refs.length).to.be.greaterThan(0);

			// loop over references
			$refs.each($ref => {
				expect($refs[$ref]).to.have.css('cursor', 'pointer');

				cy.wrap($refs[$ref])
					.trigger('mouseover')
					.then(window => {
						// click on each reference
						cy.get('.rtTooltip').should('be.visible'); // view the reference tooltip
					});
			});
		});
	});
});
