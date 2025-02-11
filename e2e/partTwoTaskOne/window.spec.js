/// <reference types="cypress" />
import '../../fixtures/valus.json'

describe('Search Box testing', () =>

beforeEach(() => {
  cy.visit(base_url);
}));

  it('Verify Search Input Field Is Present and Usable', () => {
  
    search_buton = cy.get('.search-button_wrap_text__dVNaZ');
    search_buton.then($button => {
      if ($button.is(':visible')){
        search_value.click();
        cy.type(search_value);
      }

  })

  it('Verify Search Suggestion Dropdown Appears on Typing', () => {
  
    cy.get('.search-button_wrap_text__dVNaZ').click();
    search_value.click();
    cy.type(search_value);
    cy.get('.search-results_sug_title__eXmTJ').should('have.value', search_value);
  })

  it('Verify Search Results Page Load on Enter', () => {
  
    cy.get("'.item.SubTitle ? 'pipe-after':'").should('have.value', search_value);
  })

})
