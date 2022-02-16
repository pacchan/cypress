// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('log in', function () {
    it('log in to home page and browse to edit profile page', function(){
        cy.visit('http://13.75.189.136:8081')
        cy.get('#username').type('ubiquity')
        cy.get('#password').type('P@ss123#UbiQuity')
        cy.get('.btn').click()
    })

    it('verify edit profile page is opened', function(){
        cy.get('[href="/editprofile"]').click()
        cy
            .get('#IntroText > :nth-child(1)')
            .should('be.visible')
    })

})