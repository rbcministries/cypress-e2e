context('Geocentric', () => {
    it('All countries can access devotional', () => {
        cy.fixture('countries').then((countries) => {
            for (const key in countries) {
                if (countries.hasOwnProperty(key)) {
                    cy.visit('/?country=' + key);

                    // Scroll through page
                    cy.get('footer').scrollIntoView();

                    // TODO check footer for correct location

                    cy.scrollTo('top');

                    cy.get('.today-title>a:first').should('be.visible').click();
                    const todayTitle = cy.get('.devo-title')
                    todayTitle.should('be.visible');

                    cy.get('.error-page-wrapper').should('not.exist');


                    cy.get('footer').scrollIntoView();


                    // TODO navigate with calendar
                    // cy.get('.calendar-toggle a:first').should('be.visible').click();
                    // ugh can't do this because calendar closes on scroll
                    //cy.get('.rw-state-selected').next().click();

                    // const tomorrowTitle = cy.get('.devo-title');
                    // tomorrowTitle.should('be.visible');
                    // todayTitle.should('not.eq', tomorrowTitle);
                }
            }
        })
    })
})