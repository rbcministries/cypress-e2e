const API_URL = 'https://api.experience.odb.org/';

context('Calling Layouts API', () => {
    it('Unauthorized access not allowed POST', () => {
        cy.request({
            url: API_URL + 'interactions/journals',
            method: 'POST',
           failOnStatusCode: false
        })
        .then( (response) => {
            assert.equal(response.status, 403);
        })
    });

    it('Unauthorized access not allowed GET', () => {
        cy.request({
            url: API_URL +'interactions/journals',
            method: 'GET',
           failOnStatusCode: false
        })
        .then( (response) => {
            assert.equal(response.status, 403);
        })
    });

    it('Unauthorized access not allowed PUT', () => {
        cy.request({
            url: API_URL + 'interactions/journals',
            method: 'PUT',
           failOnStatusCode: false
        })
        .then( (response) => {
            assert.equal(response.status, 403);
        })
    });

    it('Unauthorized access not allowed DELETE', () => {
        cy.request({
            url: API_URL + 'interactions/journals',
            method: 'DELETE',
           failOnStatusCode: false
        })
        .then( (response) => {
            assert.equal(response.status, 403);
        })
    });
});