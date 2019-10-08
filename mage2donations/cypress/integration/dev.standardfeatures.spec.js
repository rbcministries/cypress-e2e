import {expect} from 'chai';


describe( 'General Checks', () => {
	it('Homepage  redirects to offer', () => {
		cy.server();

		cy.visit(('https://dev.mage2.org/'));
		cy.wait(2000);
		cy.location('pathname').should('match', /^\/intm.*/);
	}),
	it('Testing that the form loads', () => {
		cy.visit(('https://dev.mage2.org/intm4.html'));

		cy.wait(7000);
		/* does form display*/
		cy.get('#amount').should('be.visible');
		cy.get('[data-cy=givemonthly]').should('be.visible');
		cy.get('[data-cy=giveonce]').should('be.visible');
		/*form has not progressed  prematurely*/
		cy.get('#product-addtocart-button').should('not.be.visible');
	}),
	it('Testing amount is required', () => {
		cy.visit(('https://dev.mage2.org/intm4.html'));
		cy.wait(3000);

		/* advance without amount to cause error */
		cy.get('[data-cy=giveonce]').click();
		/*data not filled in yet, should fail*/
		cy.get('#amount-error').should('be.visible');
	}),
	it('Testing form buttons display', () => {
		cy.visit(('https://dev.mage2.org/intm4.html'));
		/* add amount and test that buttons show */
		cy.wait(2000);
		cy.get('#amount').click().type('4.11');
		cy.get('[data-cy=giveonce]').click();
		cy.wait(2000);
		cy.get('#amount-error').should('not.exist');
		///.should('not.be.visible');


		/* Do the Credit card/Paypal buttons show */
		cy.get('#product-addtocart-button').should('be.visible');
		cy.get('div.paypal.checkout.before input').should('be.visible');

		/* try monthly, does only the CC button show */
		cy.get('[data-cy=givemonthly]').click();
		cy.get('#product-addtocart-button').should('be.visible');
		cy.get('div.paypal.checkout.before input').should('not.be.visible');


	}),
	it('Insufficient donation message', () => {
		cy.server();

		cy.visit(('https://dev.mage2.org/intm4.html'));
		cy.wait(2000);
		/* enter an insufficient acount. */
		cy.get('#amount').click().type('1.11');

		cy.get('[data-cy=giveonce]').click();
		cy.get('#product-addtocart-button').click();

		cy.wait(9000);
		/* make sure the modal window for minimum amount is visible */
		cy.get('aside.modal-popup.confirm._show .modal-inner-wrap h1.modal-title').should('be.visible');

	}),
	it('Run Paypal', () => {
		cy.server();

		/* grab offer */
		cy.visit(('https://dev.mage2.org/intm4.html'));
		cy.wait(2000);
		cy.get('#amount').click().type('2.11');

		/* give Paypal */
		cy.get('[data-cy=giveonce]').click();
		cy.get('div.paypal.checkout.before input').click();

		cy.wait(4000);  //wait out redirect

		/* goes to Paypal */
		cy.location('pathname', {timeout: 10000}).should('match', /^\/checkoutnow.*/);

		/* log into paypal with sandbox account */

		/* Paypal don't play with testing **
		cy.get('#email').click().clear().type('paypal-buyer@rbc.org');
		//cy.get('#btnNext').click();

		//cy.wait(1000);
		cy.get('#password').click().type('ODBM2015');
		cy.get('#btnLogin').click();


		/* progresses through Paypal and verifies * /
		cy.location('pathname', {timeout: 10000}).should('match', /^\/webapps.* /);
		cy.get('#confirmButtonTop').click();

		/* returns back to dev server * /
		cy.location('pathname', {timeout: 10000}).should('match', /^\/paypal\/express.* /);
		cy.get('#review-button').should('be.visible');
		cy.get('.paypal-review-items .paypal-review-title').should('be.visible');

		/* completes order * /
		cy.get('#review-button').click();

		/* verifies success * /
		cy.location('pathname', {timeout: 10000}).should('eq', '/checkout/onepage/success/');

		/* </Paypal don't play */
		})
});