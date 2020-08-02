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

describe('Validate RootCause tab scenarios',() => {
    before(() => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,620)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.wait(3000)
        cy.loginWithUI('sisupervisor', 'password')
        cy.wait(3000)
        //Select Configuration as sisupervisor      
        cy.selectCompaintsSupervisorConf()
    }); 
    it('click on RootCause tab', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(2) > .cui-in-basket-button').click()
        cy.wait(2000) 
        //Click Apply
        cy.viewport(1200,820)
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
        cy.wait(19000) 
        //Click on Topics
        cy.get('.editLink').click()
        cy.wait(2000)
        //Check 'Download all' get displayed when none of the topics are selected
        cy.get('.topic-downlaod-all > .bx--btn').contains('Download All')
        cy.wait(2000) 
        cy.get('tbody > :nth-child(1) > :nth-child(2) > .bx--checkbox-label').click()
        cy.wait(2000) 
        //Check 'Download' get displayed when one topic is selected
        cy.get('.bx--batch-actions > .bx--btn').contains('Download')
        cy.wait(2000) 
        cy.get('.bx--batch-summary__para > span').contains('1 item selected')
        cy.wait(2000) 
        cy.get('.bx--batch-summary__cancel').contains('Cancel')        
        cy.wait(2000) 
        cy.get('.bx--btn > :nth-child(2)').click()
    })   
})
          