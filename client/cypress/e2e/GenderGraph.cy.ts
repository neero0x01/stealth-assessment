describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.get('span.ps-menu-label').contains('Gender').click();
  })
})