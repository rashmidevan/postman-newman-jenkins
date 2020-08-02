/* 
 * Licensed Materials - Property of IBM
 *
 * IBM Financial Crimes Insight, PID 5900-A0H
 * IBM Financial Crimes Insight for IBM Cloud Pak for Data, PID 5737-E41
 *
 * (c) Copyright IBM Corporation 2020
 *
 * U.S. Government Users Restricted Rights:  Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp. 
 */

/// <reference types="cypress" />
describe("Validate alert search page layout", () => {
    before(() => {
        window.sessionStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,820)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.loginWithUI('sisupervisor', 'password')
        cy.selectSISupervisorConf()
        cy.get('.cui-icon-string-img-header > .bx--btn__icon').click()
    });  
    beforeEach(() => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        cy.clearCookies();
        cy.reload()
        cy.loginWithUI('sisupervisor', 'password')
        cy.selectSISupervisorConf()
        cy.get('.cui-icon-string-img-header > .bx--btn__icon').click()
        cy.wait(2000)
    }); 
    it('check the alert search page layout', () =>{
        //check the filter panel contents
        cy.get('.title').contains('Filters')
        cy.get('.form #date-picker > :nth-child(1) > .bx--label').contains('Start date')
        cy.get('.form #date-picker > :nth-child(2) > .bx--label').contains('End date')
        cy.get('.form :nth-child(2) > .bx--form-item > .bx--label').contains('Alert Type')
        cy.get('.form :nth-child(3) > .bx--form-item > .bx--label').contains('Employee Name')
        cy.get('.form :nth-child(4) > .bx--form-item > .bx--label').contains('Ticker')
        cy.get('.form :nth-child(5) > .bx--form-item > .bx--label').contains('Case Id')
        cy.get('.form :nth-child(6) > .bx--form-item > .bx--label').contains('Status')
    
        //check the default text content in each of the text box
        cy.get('.form #alert-type').should('have.attr', 'placeholder','Alert Type')
        cy.get('.form #employee-name').should('have.attr', 'placeholder','Search Name')
        cy.get('.form #ticker').should('have.attr', 'placeholder','Search ticker') 
        cy.get('.form #alert-id').should('have.attr', 'placeholder','Case Id')
        cy.get('.form #alert-status').should('have.attr', 'placeholder','Search status') 
        
        //check the presence of buttons
        cy.get('.form .simple-button').contains('Clear all')
        cy.get('.buttons > .bx--btn').contains('Apply filters')

        //check the sorting on ID      
        cy.get('.right-content > .content :nth-child(4) > .bx--table-sort-v2 > .bx--table-sort-v2__icon').click()
        cy.get('.right-content > .content tbody > :nth-child(1) > :nth-child(4)').contains('1')
        cy.get('.right-content > .content tbody > :nth-child(8) > :nth-child(4)').contains('8')
        cy.wait(2000)
        cy.get('.right-content > .content :nth-child(4) > .bx--table-sort-v2 > .bx--table-sort-v2__icon').click()
        cy.get('.right-content > .content tbody > :nth-child(1) > :nth-child(4)').contains('8')
        cy.get('.right-content > .content tbody > :nth-child(8) > :nth-child(4)').contains('1')
    })
});
