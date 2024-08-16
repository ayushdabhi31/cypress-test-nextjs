describe('Forms Test', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })

    it('Contains correct header text', () => {
        cy.url().should('include', '/forms');
        cy.get('h1').then(($el) => {
            cy.log($el.text()); // Log the header text if found
        });
        cy.getDataTest('forms-header').should('contain.text','Testing Forms')
      })

})


