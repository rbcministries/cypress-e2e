/// <reference types="Cypress" />
context('Feature toggling', ()=>{

    it('Devotional Image should not appear after api call', ()=>{
        cy.server();
        cy.route({
            method:'GET',
            url: 'https://ax1ajbln53.execute-api.us-east-1.amazonaws.com/dev/features',
            response:{DevotionalImage:false},
            headers: { 'Access-Control-Allow-Origin':'*'}
        });
        cy.visit('http://odb.org/2019/05/21/marvelously-unique/')
        cy.get('.today-img').should('not.exist')
    })

    it('Devotional Image should appear after api call', ()=>{
        cy.server();
        cy.route({
            method:'GET',
            url: 'https://ax1ajbln53.execute-api.us-east-1.amazonaws.com/dev/features',
            response:{DevotionalImage:true},
            headers: { 'Access-Control-Allow-Origin':'*'}
        });
        cy.visit('http://odb.org/2019/05/21/marvelously-unique/')
        cy.get('.today-img').should('exist')
    })

    it('Devotional Image should appear after reading from local storage', ()=>{
        localStorage.setItem('odb-features',JSON.stringify({DevotionalImage:true}))
        cy.visit('http://odb.org/2019/05/21/marvelously-unique/')
        cy.get('.today-img').should('exist')
    })

    it('Devotional Image should not appear after reading from local storage', ()=>{
        localStorage.setItem('odb-features',JSON.stringify({DevotionalImage:false}))
        cy.visit('http://odb.org/2019/05/21/marvelously-unique/')
        cy.get('.today-img').should('not.exist')
    })
})