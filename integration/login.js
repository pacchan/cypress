// untitled.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('log in', function () {
    it('log in to home page', function(){
        cy.visit('http://13.75.189.136:8081')
        expect(true).to.equal(true)
    })

})