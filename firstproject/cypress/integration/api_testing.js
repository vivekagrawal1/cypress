describe('API Testing', () =>{

    Cypress.config('baseUrl', 'https://reqres.in')

    it('GET - read', () =>{
        //cy.request('GET','/api/users?page=2').then((response) =>{
        cy.request('/api/users?page=1').then((response) =>{
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(6)
        })
    
    })
    it('POST - create', () =>{
        const requestbody = {"name": "vivek","job": "qa"}
        cy.request('POST', '/api/users', requestbody)
        .its('body').should('include', {name:'vivek'})
    })
    it('PUT - update', () =>{
        const requestbody = {"name": "vivaan"}
        //cy.request('PUT', '/api/users/1', requestbody)

        //assert if status is 200
        cy.request('PUT', '/api/users/1', requestbody).its('status').should('eq',200)
    })
    it('DELETE - remove', () =>{
        cy.request('DELETE','/api/users/12')
    })

})