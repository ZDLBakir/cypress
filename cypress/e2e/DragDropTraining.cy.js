describe('Practice Drag and Drop', () => { 
    it('Drop and Drop test case Pass', () => {
        cy.visit('https://practice.expandtesting.com/drag-and-drop')
        cy.get('#column-a > header').should('have.text', 'A')
        cy.get('#column-b > header').should('have.text', 'B')
        cy.get('#column-a').drag('#column-b')
        cy.get('#column-a > header').should('have.text', 'B')
        cy.get('#column-b > header').should('have.text', 'A')

        //No Plugin method
        /*cy.get('#column-a').trigger('mousedown', {which: 1})
        cy.get('#column-a').trigger('mousemove', 250,350)
       cy.get('#column-a').trigger('mouseup', {force: true})*/
    })
})