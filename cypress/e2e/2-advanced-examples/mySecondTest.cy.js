context('My Second Test', () => {
  //beforeEach(() => {
  //cy.visit('/')
  //cy.visit('http://example.cypress.io/commands/actions')
  //})

  it('types into a email field', () => {
    cy.visit('http://localhost:8080/commands/actions') //2.
    //cy.visit('http://example.cypress.io/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com')//3.
    cy.wait(2000).then(() => { //.then() can used for non-cypress asynchronous commands
      console.log('test is finished.')
      fetch('https://api.spacexdata.com/v3/missions')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    })//4.
    // console.log('test is finished.') // This will run before cy commands //1.

    //cy.log('Cypres log used.')
  })
})
