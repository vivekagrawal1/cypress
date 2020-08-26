describe('Mocking an API response', function(){

    it.skip('First mock a GET api response', () =>{    
        cy.server()
        cy.route('GET', '**/api/users?*', 'fixture:mockResponseData.json')

        cy.request('https://reqres.in/api/users?page=2')

    })

    it('mock a GET api response', () =>{    
        cy.server()
        cy.route('GET', 'http://automationpractice.com/index.php?controller=contact', 'fixture:contact.html')

        cy.visit('http://automationpractice.com/index.php?controller=contact')

        cy.get('.page-heading').contains('Customer service - Contact us')
        cy.get('.page-subheading').contains('send a message')

    })

})