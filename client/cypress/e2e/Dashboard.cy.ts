/// <reference types="Cypress"

describe('Dashboard Page', () => {
  it('should render the dashboard page and only one h1', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('have.length', 1)
    cy.get('h1').should('contain', 'The Stealth Startup')
  })
})