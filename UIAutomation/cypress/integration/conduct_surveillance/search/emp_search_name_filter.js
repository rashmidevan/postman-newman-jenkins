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
describe("Validate employee search functionality scenarios on Employee Name filter", () => {
    before(() => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,820)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.loginWithUI('sisupervisor', 'password')
        cy.selectSISupervisorConf()
        cy.get('.cui-icon-string-img-header > .bx--btn__icon').click()
        cy.get(':nth-child(2) > a > .link').click()
    });  
    it('search on employee name filter', () =>{
        //Scenario - search on valid employee name - Alexis Freeman
        cy.get('#employee-name').type('Alexis Freeman')
        //Click on Apply
        cy.get('.form .buttons > .bx--btn').click() 
        cy.wait(2000)       
        cy.get('.employee-list .abbrev').contains('AF')
        cy.get('.employee-list .fullname').contains('Alexis Freeman')
        cy.get('.employee-list .info').contains('Trader, New York, NY')
        cy.get('.employee-list :nth-child(1) > h4').contains('Risk')
        cy.get('.employee-list :nth-child(2) > h4').contains('ID')
        cy.get('.employee-list :nth-child(3) > h4').contains('Active Alerts')
        cy.get('.employee-list :nth-child(4) > h4').contains('Past Violations') 
        cy.get('.form .simple-button').contains('Clear all').click()
    
        //Scenario - search on valid employee name using firstname- Chris
        cy.get('#employee-name').type('Chris')        
        cy.get('.form .buttons > .bx--btn').click() 
        cy.wait(2000)        
        cy.get('.employee-list :nth-child(1) > .card-header > .abbrev').contains('CM')       
        cy.get('.employee-list :nth-child(2) > .card-header > .abbrev').contains('CB')        
        cy.get('.employee-list :nth-child(3) > .card-header > .abbrev').contains('CP')        
        cy.get('.employee-list :nth-child(1) > .card-header > .fullname').contains('Chris Morris')
        cy.get('.employee-list :nth-child(2) > .card-header > .fullname').contains('Chris Brown')
        cy.get('.employee-list :nth-child(3) > .card-header > .fullname').contains('Christian Powell')
        cy.get('.form .simple-button').contains('Clear all').click()

        //Scenario - search on valid employee name using lastname- Brown         
        cy.get('#employee-name').type('Brown')
        cy.get('.form .buttons > .bx--btn').click()        
        cy.wait(2000)  
        cy.get('.employee-list :nth-child(1) > .card-header > .abbrev').contains('IB')        
        cy.get('.employee-list :nth-child(2) > .card-header > .abbrev').contains('CB')        
        cy.get('.employee-list :nth-child(1) > .card-header > .fullname').contains('Isabella Brown')
        cy.get('.employee-list :nth-child(2) > .card-header > .fullname').contains('Chris Brown')
        cy.get('.form .simple-button').contains('Clear all').click()     

        //Scenario - search on valid employee name using wildcard * as suffix
        cy.get('#employee-name').type('All*')
        cy.get('.form .buttons > .bx--btn').click()  
        cy.wait(2000)      
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-5 of 5 items')      
        cy.get('.form .simple-button').contains('Clear all').click()     
        
        //Scenario - search on valid employee name using wildcard * as prefix       
        cy.get('#employee-name').type('*Ward')
        cy.get('.form .buttons > .bx--btn').click()       
        cy.wait(2000)
        cy.get('.employee-list :nth-child(1) > .card-header > .abbrev').contains('AW')
        cy.get('.employee-list :nth-child(2) > .card-header > .abbrev').contains('AH')
        cy.get('.employee-list :nth-child(3) > .card-header > .abbrev').contains('CE')
        cy.get('.form .simple-button').contains('Clear all').click()        
        
        //Scenario - search on invalid employee name - Chanakya
        cy.get('#employee-name').type('Chanakya')
        cy.get('.form .buttons > .bx--btn').click()        
        cy.wait(2000)
        cy.get('.right-content > .content .algnCntr').contains('No Records Available')
        cy.get('.form .simple-button').contains('Clear all').click()     

        //Scenario - search on valid employee name using firstname - Chris with space appended    
        cy.get('#employee-name').type('Chris ')
        cy.get('.form .buttons > .bx--btn').click()        
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-3 of 3 items')      
        cy.get('.form .simple-button').contains('Clear all').click()    
        
        //Scenario - search on valid employee name using firstname - Chris with space prefixed 
        cy.get('#employee-name').type(' Chris')
        cy.get('.form .buttons > .bx--btn').click()        
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-3 of 3 items')      
        cy.get('.form .simple-button').contains('Clear all').click()    
    })     
});
