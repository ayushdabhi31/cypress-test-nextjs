describe('Fundamentals test', () => {

  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  
  it('Contains correct header text', () => {
    // cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i) // this syntax makes case-insensitive
    cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals') 

    // Using custom command
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals')
  })

  it('Accordion works correctly', () => {
    // cy.visit('/fundamentals')

    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')

  })

  it('Accordion works correctly through custom command', () => {
    // cy.visit('/fundamentals')

    cy.contains(/Within your describe block,/i).should('not.be.visible')
    cy.getDataBtn('accordion-item-2').click()
    cy.contains(/Within your describe block,/i).should('be.visible')
    cy.getDataBtn('accordion-item-2').click()
    cy.contains(/Within your describe block,/i).should('not.be.visible')


    cy.contains(/You're often going to want to get an element from t/i).should('not.be.visible')
    cy.getDataBtn('accordion-item-4').click()
    cy.contains(/You're often going to want to get an element from t/i).should('be.visible')
    cy.getDataBtn('accordion-item-4').click()
    cy.contains(/You're often going to want to get an element from t/i).should('not.be.visible')

    cy.contains(/After you get an element,/i).should('not.be.visible')
    cy.getDataBtn('accordion-item-5').click()
    cy.contains(/After you get an element,/i).should('be.visible')
    cy.getDataBtn('accordion-item-5').click()
    cy.contains(/After you get an element,/i).should('not.be.visible')

    cy.contains(/You can use it./i).should('not.be.visible')
    cy.getDataBtn('accordion-item-6').click()
    cy.contains(/You can use it./i).should('be.visible')
    cy.getDataBtn('accordion-item-6').click()
    cy.contains(/You can use it./i).should('not.be.visible')

    cy.contains(/You can use a beforeEach/i).should('not.be.visible')
    cy.getDataBtn('accordion-item-7').click()
    cy.contains(/You can use a beforeEach/i).should('be.visible')
    cy.getDataBtn('accordion-item-7').click()
    cy.contains(/You can use a beforeEach/i).should('not.be.visible')

    cy.contains(/You aren't limited to just the/i).should('not.be.visible')
    cy.getDataBtn('accordion-item-8').click()
    cy.contains(/You aren't limited to just the/i).should('be.visible')
    cy.getDataBtn('accordion-item-8').click()
    cy.contains(/You aren't limited to just the/i).should('not.be.visible')
  })
})