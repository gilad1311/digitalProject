
/// <reference types="cypress" />
import base_gsb_url from '../fixtures/valus.json'

describe('GetAggregationUnits API Request', () => {
    it('should return status code 200 for GetAggregationUnits API request on the government service branches page', () => {
      
      // Intercept the network request for GetAggregationUnits
      cy.intercept('GET', base_gsb_url + '/GetAggregationUnits').as('getAggregationUnits');
      
      // Visit the page https://www.gov.il/he/government-service-branches
      cy.visit(base_gsb_url);
  
      // Wait for the intercepted request to complete
      cy.wait('@getAggregationUnits')
        .its('response.statusCode')
        .should('eq', 200); // Verify that the status code is 200
    });
  });