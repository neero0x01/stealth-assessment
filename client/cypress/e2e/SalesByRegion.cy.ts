describe('Sales by region', () => {
  it('should display sales by region chart', () => {
    cy.visit('http://localhost:3000')
    cy.get('span.ps-menu-label').contains('Sales by Region').click()
  })
})