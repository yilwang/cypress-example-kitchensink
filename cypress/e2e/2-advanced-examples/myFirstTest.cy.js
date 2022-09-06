//const cypressConfig = require("../../../cypress.config")

const navbarText = Cypress.env('navbarText')

context('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/commands/actions')
    //cy.visit('http://example.cypress.io/commands/actions')
  })

  it('has an h1 on the page', () => {
    cy.get('h1').should('exist')
  })

  it('renders the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Actions')
  })

  it('renders a paragraph under the h1', () => {
    cy.get('.container').find('p').should('exist')
  })

  it('renders a paragraph under the h1', () => {
    cy.get('.container').eq(1).find('p').should('exist')
  })

  it('renders a section with an correct element', () => {
    cy.get('.container').eq(2).within(() => {
      cy.get('h4').should('exist')
      cy.get('p').should('exist')
    })
  })

  it('correctly renders the cypress website link', () => {
    //cy.findByText('cypress.io').should('exist')
    cy.findByText(navbarText).should('exist')
  })
})
