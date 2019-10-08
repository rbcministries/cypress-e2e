context('User Registration', () => {
    it('Create a new user', () => {
        cy.visit('https://beta.ourdailybread.org');

        cy.get('.header-signin-wrapper.mobile-menu-hide')
            .find('a[data-target="#login-modal"]')
            .should('be.visible')
            .click()

        cy.get('#login-modal').find('.register-wrapper').should('be.visible')
        
        cy.get('#login-modal')
            .find('.register-wrapper')
            .find('a.rbc-profiles-login-register-link')
            .should('be.visible')
            .should('have.prop', 'href')
            .and('equal', 'https://beta.ourdailybread.org/register/')
        
        cy.get('#login-modal')
            .find('.register-wrapper')
            .find('a.rbc-profiles-login-register-link')
            .should('be.visible')
            .should('have.prop', 'target')
            .and('equal', '_blank')
            
        // cy.get('#login-modal')
        //     .find('.register-wrapper')
        //     .find('a.rbc-profiles-login-register-link')
        //     .should('be.visible')

        cy.get('#login-modal')
            .find('.register-wrapper')
            .find('a.rbc-profiles-login-register-link')
            .invoke('removeAttr', 'target')
            .click()

        cy.url().should('include', 'beta.ourdailybread.org/register/')

        cy.get('#rbc-profiles-registration')
            .find('form#rbc-profiles-registration-form')
            .should('be.visible')

        cy.get('form#rbc-profiles-registration-form')
            .should('have.prop', 'method')
            .and('equal', 'post')

        cy.get('form#rbc-profiles-registration-form')
            .find('input')
            .should('have.length', 8)

        

        cy.fixture('users.json').then((user) => {
            cy.get('#reg_user_login')
                .type(user.username)
                .should('have.value', user.username)
            
            cy.get('#reg_user_login')
                .parent()
                .prev()
                .should('match', 'label')
                .should('have.prop', 'for')
                .and('equal', 'user_login')

            cy.get('#reg_user_email')
                .type(user.email)
                .should('have.value', user.email)

            // Is the user email label present
            cy.get('#reg_user_email')
                .parent()
                .prev()
                .should('match', 'label')
                .should('have.prop', 'for')
                .and('equal', 'user_email')

            cy.get('#first_name')
                .type(user.first_name)
                .should('have.value', user.first_name)

            // Is the first name label present
            cy.get('#first_name')
                .parent()
                .prev()
                .should('match', 'label')
                .should('have.prop', 'for')
                .and('equal', 'first_name')
            
            cy.get('#last_name')
                .type(user.last_name)
                .should('have.value', user.last_name)

            // Is the last name label present
            cy.get('#last_name')
                .parent()
                .prev()
                .should('match', 'label')
                .should('have.prop', 'for')
                .and('equal', 'last_name')
            
            cy.get('#user_country')
                .select(user.country)
                .should('have.value', user.country)

            // Is the user country label present
            cy.get('#user_country')
                .parent()
                .prev()
                .should('match', 'label')
                .should('have.prop', 'for')
                .and('equal', 'user_country')

            cy.get('[name="_privacy_policy[]"]')
                .click()
                .should('have.value', 'I Agree')

            // Is the privacy policy label present
            // cy.get('[name="_privacy_policy[]"]')
            //     .parentsUntil('.rbc-profiles-field-value')
            //     .prev()
            //     .should('match', 'label')
            //     .should('have.prop', 'for')
            //     .and('equal', '_privacy_policy')

            cy.get('form#rbc-profiles-registration-form')
                .find('#register-validation-btn')
                .should('be.visible')
                .click()

            cy.get('.rbc-profiles-main')
                .find('.rbc-profiles-success')
                .should('be.visible')

            cy.get('.rbc-profiles-success')
                .find('span')
                .should('contain', 'Registration successful. Please check your email.')
        })

        
    });
});