
describe('Write and Read a file', function(){

    it('create a file and write something to it', function(){    
        cy.writeFile('sampleFile.txt','Hello World\n')
        cy.writeFile('sampleFile.txt','Vivek Agrawal',{flag:'a+'})
    })

    it('read from a file', function(){
        cy.readFile('sampleFile.txt').should('contains', 'Vivek Agrawal')
    })
})