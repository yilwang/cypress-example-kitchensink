context('My Third Test', () => {
  it('shows an active class for the current page.', () => {
    cy.visit('http://localhost:8080/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
  })

  it('should not have an active class on inactive pages.', () => {
    cy.visit('http://localhost:8080/commands/actions')
    cy.get('.dropdown-menu').find('li').first()
    .should('not.have.class', 'active')
    .find('a')
    .should('have.attr', 'href', '/commands/querying')
  })

  it('can link to the actions page correctly', () => {
    cy.visit('http://localhost:8080')
    cy.findAllByText('Actions').last().click()
    cy.url().should('include', 'commands/actions')
  })

  it('can link to the actions page correctly', () => {
    cy.visit('http://localhost:8080')
    cy.findAllByText('Actions').first().click({ force: true })
    cy.url().should('include', 'commands/actions')
  })

  it('lets you type in an input field.', () => {
    cy.visit('http://localhost:8080/commands/actions')
    cy.findAllByPlaceholderText('Email').type('Test').should('have.value', 'Test')
  })

  it('lets you clear an input field.', () => {
    cy.visit('http://localhost:8080/commands/actions')
    cy.findAllByLabelText('Describe:').type('Test description').should('have.value', 'Test description')
    .clear().should('have.value', '')
  })

  it('lets you cleck a checkbox input field.', () => {
    cy.visit('http://localhost:8080/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
  })

  it('lets you cleck a checkbox input field.', () => {
    cy.visit('http://localhost:8080/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]').eq(1).check({ force: true }).should('be.checked')
  })
})
