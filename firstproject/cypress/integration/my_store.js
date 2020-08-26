it('visit My Store and search for dresses', function(){
    
    //open the marketplace
    cy.visit('http://automationpractice.com/index.php')
    //cy.visit('https://dev.mymana.com/login')
    
    //search for 'dress'
    cy.get('#search_query_top')
    //cy.get('.search_query')
        .type('dress')
        .should('have.value', 'dress')
    cy.get('#searchbox > .btn')
        .click()

    //sort the result alphabetically
    cy.get('#selectProductSort').select('Product Name: A to Z')

    //click on a particular product
    cy.get(':nth-child(2) > .product-container > .right-block > h5 > .product-name').click()

    cy.get('h1').contains('Faded Short Sleeve T-shirts')

    //select quantity of purchase
    cy.get('#quantity_wanted').clear()
    cy.get('#quantity_wanted').type('2')
    
    //select size
    cy.get('#group_1').select('M')

    //add to cart
    cy.get('.exclusive > span').click()

    //verfiy product successfully added message
    cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart')

    //hit proceed to checkout in the overlay
    cy.get('.button-medium > span').click()

    //review shopping cart summary and proceed to authentication
    cy.get('#total_price').contains('$35.02')
    cy.get('.cart_navigation > .button > span').click()

    //sign-in
    cy.get('#email').type('vivek.seven@gmail.com')
    cy.get('#passwd').type('vivek.seven')
    cy.get('#SubmitLogin > span').click()

    //choose a delivery address and proceed to shipping
    cy.get('#id_address_delivery').select('Home Address')
    cy.get('.cart_navigation > .button > span').click()

    //agree to terms of service and proceed to payment
    cy.get('#cgv').check()
    cy.get('.cart_navigation > .button > span').click()

    //payment step 1 - choose payment method
    cy.get('.page-heading')
    cy.get('.page-heading').contains('Please choose your payment method')
    cy.get('.bankwire').click()

    //order summary and confirm order
    cy.get('#cart_navigation > .button > span').click()

    //order confirmation
    cy.get('.cheque-indent > .dark').contains('Your order on My Store is complete.')

    
})