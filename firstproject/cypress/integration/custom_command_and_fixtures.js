it('visit My Store and search for dresses', function(){
    
    //open the marketplace
    cy.visit('http://automationpractice.com/index.php')
    
    cy.fixture('userLoginDetails').then((user)=>{
        //login
        cy.SignIn(user.username,user.password)
    })

    
}) 