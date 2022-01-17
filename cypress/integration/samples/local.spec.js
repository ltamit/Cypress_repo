describe('LambdaTest UnderPass Testing', () => {
    it('Successfully navigate to local URL', () => {
        cy.visit('http://localhost:3000')
        cy.screenshot({capture: 'fullPage'})
    })
})