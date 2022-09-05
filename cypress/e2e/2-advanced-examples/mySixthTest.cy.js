const token = 'abcd123'

context('My Fifth Test', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.data = data
      cy.log('THIS: ', this.data)
    })
  })

  it('sets and gets a token in local storage', () => {
    cy.setLocalStorage('token', token)
    cy.getLocalStorage('token').should('eq', token)
  })

  it('overwrites the type command by using sensitive characters', () => {
    cy.visit('http://localhost:8080/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')
    cy.findByPlaceholderText('Email').type('test@email.com', { sensitive: true })
  })
})
