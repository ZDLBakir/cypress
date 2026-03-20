describe('Practice Drag and Drop', () => { 
    it('Drop and Drop test case Pass', () => {
        cy.visit('https://practice.expandtesting.com/drag-and-drop')
        cy.get('#column-a > header').should('have.text', 'A')
        cy.get('#column-b > header').should('have.text', 'B')
        cy.get('#column-a').drag('#column-b')
        cy.get('#column-a > header').should('have.text', 'B')
        cy.get('#column-b > header').should('have.text', 'A')

        //No Plugin method
        /*cy.get('#column-a > header').should('have.text', 'A')
        cy.get('#column-b > header').should('have.text', 'B')
        const findRectCenter = $el => {
            const movingBox = $el[0].getBoundingClientRect()
            return{
                x: movingBox.left + movingBox.width / 2,
                y: movingBox.top + movingBox.height / 2,
            }
        }
        cy.get('#column-a').then($source => {
            cy.get('#column-b').then($target => {
                // grabs center of 
                const locA = findRectCenter($source)
                const locB = findRectCenter($target)

                cy.wrap($source).trigger('mousedown', {button: 0, clientX: locA.x, clientY: locA.y, force: true})
                cy.wrap($source).trigger('mousemove', {clientX: locB.x, clientY: locB.y, force: true})
                cy.wrap($source).trigger('mouseup', {force: true})

            })
        })
        cy.get('#column-a > header').should('have.text', 'B')
        cy.get('#column-b > header').should('have.text', 'A')
        //cy.get('#column-a').trigger('mousedown', {which: 1})
        //cy.get('#column-a').trigger('mousemove', 250,350)*/
       
    })
})