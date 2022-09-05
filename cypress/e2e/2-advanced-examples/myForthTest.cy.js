context('My Forth Test', () => {
//   before(() => {
//     cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length',10)
//   })
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  afterEach(() => {
    cy.log('after each hook is here.')
  })

  after(() => {
    cy.log('the after hook runs once.')
  })

  it('visits the home page', () => {
    // cy.visit('http://localhost:8080')
  })

  it('has an h1 on the page', () => {
    //cy.visit('http://localhost:8080')
    cy.get('h1').should('exist')
  })

  it('renders the corretnt h1 text', () => {
    cy.get('h1').should('contain.text', 'Kitchen Sink')
  })
})
