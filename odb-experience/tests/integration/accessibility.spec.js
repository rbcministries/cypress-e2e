context('ODB-Experience', () => {
    describe('Accessibility', () => {
        beforeEach(() => {
            cy.visit('https://localhost:3000')
            cy.injectAxe()
        })

        it('Has no detectable a11y violations on load', () => {
            // Test the page at initial load (with context and options)
            cy.checkA11y()
          })


        it('Has no detectable a11y violations on pageToday', () => {
            // Test the page at initial load (with context and options)
            cy.get('.homepage-banner').click();
            cy.checkA11y()
        })

        it('Has no detectable a11y violations on contactForm', () => {
            // Test the page at initial load (with context and options)
            cy.get('.contact-head h2').click();
            cy.checkA11y()
        })
    })
})