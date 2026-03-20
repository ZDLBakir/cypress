describe('practice', () => {
  it.skip('Registration Pass Case', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('https://practice.expandtesting.com/register')
    cy.get('[name="username"]').type('test1')
    cy.get('#password').type('test1')
    cy.get('#confirmPassword').type('test1')
    cy.get('#register > button').click()
  })

  it('Registration Fail Case', () => {
    cy.visit('https://practice.expandtesting.com/register')
    cy.get('[name="username"]').type('test1')
    cy.get('#password').type('test1')
    cy.get('#confirmPassword').type('test2')
    cy.get('#register > button').click()
    cy.get('#flash > b').should('have.text','Passwords do not match.')
  })
})