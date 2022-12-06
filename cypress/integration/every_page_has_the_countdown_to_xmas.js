describe('Layout page', () => {
    it('gives 1 sleep on xmas eve', () => {
        const now = new Date(2022, 11, 24, 1) // month is 0-indexed 
        cy.clock(now)
        cy.visit('/')
        cy.get('#countdown').contains('1 Sleep until Christmas')
             
    })

    it('gives 2 sleeps on xmas eve eve', () => {
        const now = new Date(2022, 11, 23, 1) // month is 0-indexed 
        cy.clock(now)
        cy.visit('/')
        cy.get('#countdown').contains('2 Sleeps until Christmas')
             
    })

    it('gives Merry Christmas on xmas day', () => {
        const now = new Date(2022, 11, 25, 1) // month is 0-indexed 
        cy.clock(now)
        cy.visit('/')
        cy.get('#countdown').contains('Merry Christmas')
             
    })

    it('gives Put your tinsel away after Christmas', () => {
        const now = new Date(2022, 11, 26, 1) // month is 0-indexed 
        cy.clock(now)
        cy.visit('/')
        cy.get('#countdown').contains('Put Your Tinsel Away.')
             
    })

})