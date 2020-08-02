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
describe("Validate alert search filters", () => {
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
    it('check the alert type filter', () =>{
        //Scenario - search on valid alert type filter - Party Behavior
        cy.get('.form #alert-type').type('Party Behavior')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Party Behavior')
        cy.get('.right-content tbody tr').should('have.length', 8)  
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on alert type valid filter - Party 
        cy.get('.form #alert-type').type('Party')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Party Behavior')
        cy.get('.right-content tbody tr').should('have.length', 8)  
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on alert type invalid filter - Trade 
        cy.get('.form #alert-type').type('Trade')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.algnCntr').contains('No Records Found')
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on alert type valid filter in lowercase - party behavior
        cy.get('.form #alert-type').type('party behavior')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Party Behavior')
        cy.get('.right-content tbody tr').should('have.length', 8)  
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on alert type using wildcard *
        cy.get('.form #alert-type').type('*')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Party Behavior')
        cy.get('.right-content tbody tr').should('have.length', 8)  
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on alert type with space as prefix and suffix
        cy.get('.form #alert-type').type(' Party behavior ')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('Party Behavior')
        cy.wait(2000)
        cy.get('.form .simple-button').click()
    })
    it('check the case id filter', () =>{
        //Scenario - search on valid case id 1 
        cy.get('.form #alert-id').type('1')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('tbody > tr > :nth-child(4)').contains('1')
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on invalid case id 100
        cy.get('.form #alert-id').type('100')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.algnCntr').contains('No Records Found')
        cy.wait(2000)
        cy.get('.form .simple-button').click()
    })
    it('check the employee name filter', () =>{
        //Scenario - search on employeename - Chris associated with alert
        cy.get('.form #employee-name').type('Chris')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.right-content tbody tr').should('have.length', 2)   
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on valid employee name - Ram gives the result for Thomas Ramos
        cy.get('.form #employee-name').type('Ram')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.right-content tbody tr').should('have.length', 1)
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on valid employee name - Alexis Freeman
        cy.get('.form #employee-name').type('Alexis Freeman')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.right-content tbody tr').should('have.length', 1)
        cy.wait(2000)
        cy.get('.form .simple-button').click()

        //Scenario - search on valid employee name - Rama
        cy.get('.form #employee-name').type('Rama')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.right-content .algnCntr').contains('No Records Found')
        cy.wait(2000)
        cy.get('.form .simple-button').click()
    })
});
