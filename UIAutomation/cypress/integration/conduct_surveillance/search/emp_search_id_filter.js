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
describe("Validate employee id filter", () => {
    before(() => {
        window.sessionStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,820)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.loginWithUI('sisupervisor', 'password')
        cy.selectSISupervisorConf()
        cy.get('.cui-icon-string-img-header > .bx--btn__icon').click()
        cy.get(':nth-child(2) > a > .link').click()
    });  
    it('check the employee id filter scenarios', () =>{
        //Scenario - search on valid employee id - 10047
        cy.get('#ticker').type('10047')
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.employee-list :nth-child(1) > .card-header > .abbrev').contains('AC')
        cy.get('.employee-list .fullname').contains('Annabelle Cole')
        cy.get('.employee-list .info').contains('Trader, New York, NY')
        cy.get('.employee-list .meta-row > :nth-child(2) > p').contains('10047')
        cy.get('.form .simple-button').contains('Clear all').click()   

        //Scenario - search on invalid employee id - 40047  
        cy.get('#ticker').type('40047')
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.right-content > .content .algnCntr').contains('No Records Available')
        cy.get('.form .simple-button').contains('Clear all').click()   
    
        //Scenario - search on valid employee id * as suffix 
        cy.get('#ticker').type('1004*')
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-10 of 10 items')
       // cy.get('.employee-list :nth-child(1) > .meta-row > :nth-child(2) > p').contains('10044')
        cy.get('.form .simple-button').contains('Clear all').click()   
        
        //Scenario - search on valid employee id using * as prefix
        cy.get('#ticker').type('*0020')
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-1 of 1 items')
        cy.get('.employee-list .meta-row > :nth-child(2) > p').contains('10020')
        cy.get('.form .simple-button').contains('Clear all').click()    
        
        //Scenario - search on valid employee id using wildcard *
        cy.get('.form .simple-button').contains('Clear all').click()  
        cy.get('#ticker').type('*')
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 149 items')
        cy.get('.form .simple-button').contains('Clear all').click()  

        //Scenario - search on valid employee id with space as a suffix
         cy.get('.form .simple-button').contains('Clear all').click()  
         cy.get('#ticker').type('10010 ')
         cy.get('.form .buttons > .bx--btn').click()
         cy.wait(2000)
         cy.get('.bx--pagination__left > :nth-child(3)').contains('1-1 of 1 items')
         cy.get('.form .simple-button').contains('Clear all').click()  

         //Scenario - search on valid employee id prefixed with space
         cy.get('.form .simple-button').contains('Clear all').click()  
         cy.get('#ticker').type('10010 ')
         cy.get('.form .buttons > .bx--btn').click()
         cy.wait(2000)
         cy.get('.bx--pagination__left > :nth-child(3)').contains('1-1 of 1 items')
         cy.get('.form .simple-button').contains('Clear all').click()  
    });
});
