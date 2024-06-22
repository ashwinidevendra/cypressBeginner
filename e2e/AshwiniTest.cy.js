describe('My First Test', () => {
  it('Go to Train Ticket Website', () => {
    cy.visit('https://www.irctc.co.in/nget/')
    cy.contains('PNR STATUS').click
    cy.url().should('include','search')
  })
})