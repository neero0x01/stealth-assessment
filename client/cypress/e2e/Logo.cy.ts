describe('Company Logo', () => {
  it('should have company logo in sidebar', () => {
    cy.visit('http://localhost:3000');
    cy.get('#company > img').should('have.attr', 'src', './logo.jpeg');
  })
})