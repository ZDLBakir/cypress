describe('Practice Drag and Drop', () => { 
    it('Drop and Drop test case Pass', () => {
        cy.visit('https://practice.expandtesting.com/drag-and-drop')
        cy.get('#column-a').trigger('mousedown', {which: 1})
        cy.get('#column-a').trigger('mousemove', 250,350)
       cy.get('#column-a').trigger('mouseup', {force: true})
    })
})