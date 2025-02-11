
/// <reference types="cypress" />
import base_gsb_url from '../fixtures/valus.json'

describe('GetAggregationCategories API Request', () => {
    it('should return status code 200 for GetAggregationCategories API request on the government service branches page', () => {
      
      // Intercept the network request for GetAggregationCategories
      cy.intercept('GET', base_gsb_url + '/GetAggregationCategories').as('getAggregationCategories');
      
      // Visit the page https://www.gov.il/he/government-service-branches
      cy.visit(base_gsb_url);
  
      // Wait for the intercepted request to complete
      cy.wait('@getAggregationCategories')
        .its('response.statusCode')
        .should('eq', 200); // Verify that the status code is 200
    });
  });