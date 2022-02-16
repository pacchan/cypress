
describe('Qurious interview', function () {
    it('log in to home page and browses to edit profile page', function(){
        cy.visit('http://13.75.189.136:8081')
        cy.get('#username').type('ubiquity')
        cy.get('#password').type('P@ss123#UbiQuity')
        cy.get('.btn').click()
    })

    it('Verify user can go to edit profile page successfully', function(){
        cy.get('[href="/editprofile"]').click()
        cy.get('#IntroText > :nth-child(1)').should('be.visible')
    })

    it('User successfully changes email address, date of birth and password', function(){
        const d = new Date() 
        cy.get('#Email > .field-value > .textfield').clear()
        .type('qa+'+ d.getTime('en-GB') + '@test.co.nz')
        cy.get('#DateOfBirth > .field-value > .textfield').clear()
        .type(d.toLocaleDateString('en-GB'))
        cy.get('#NewPassword > .field-value > .textfield').type('P@ss123#UbiQuity')
        cy.get('#ConfirmNewPassword > .field-value > .textfield').type('P@ss123#UbiQuity')
        cy.get('.submit-button').click()
        cy.get('#SuccessMessage').should('be.visible')
    })

})