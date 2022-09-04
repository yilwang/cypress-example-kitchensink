context('My First Test', () => {
  //beforeEach(() => {
  //cy.visit('/')
  //cy.visit('http://example.cypress.io/commands/actions')
  //})

  it('types into a email field', () => {
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.wait(5000)
    // console.log('test is finished.')
  })
})
