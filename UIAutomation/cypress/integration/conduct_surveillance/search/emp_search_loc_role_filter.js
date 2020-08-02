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
describe("Validate search scenarios on Location and Role", () => {
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
        cy.wait(3000)
    });  
    beforeEach(() => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        cy.clearCookies();
        cy.reload()
        cy.loginWithUI('sisupervisor', 'password')
        cy.selectSISupervisorConf()
        cy.get('.cui-icon-string-img-header > .bx--btn__icon').click()
        cy.get(':nth-child(2) > a > .link').click()
        cy.wait(2000)
    }); 
    it('search on role trader', () =>{
        cy.get('.form .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)       
        cy.get('.bx--list-box__menu').children()
                .contains('Trader').click()
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 71 items')
        cy.get('.form .simple-button').contains('Clear all').click()
    })     
    it('search on role banker', () =>{
        cy.get('.form .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)   
        cy.get('.bx--list-box__menu').children()
                .contains('Banker').click()
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 34 items')
        cy.get('.form .simple-button').contains('Clear all').click() 
    })    
    it('search on location filter scenarios', () =>{ 
        //Scenario - search on valid location    
        //Enter input in the Employee Name text box
        cy.get('#alert-id').type('NY')
        //Click on Apply
        cy.get('.form .buttons > .bx--btn').click()
        cy.get(':nth-child(1) > .card-header > .info').contains('NY')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 149 items')
        cy.get('.form .simple-button').contains('Clear all').click()  

        //Scenario - search on invalid location        
        cy.get('#alert-id').type('NC')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.right-content > .content .algnCntr').contains('No Records Available')
        cy.get('.form .simple-button').contains('Clear all').click() 

        //Scenario - search on valid location
        cy.get('#alert-id').type('ny')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get(':nth-child(1) > .card-header > .info').contains('NY')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 149 items')
        cy.get('.form .simple-button').contains('Clear all').click() 

        //Scenario - search on wildcard - *
        cy.get('#alert-id').type('*')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 149 items')
        cy.get('.form .simple-button').contains('Clear all').click()

        //Scenario - search on valid location - in lowercase
        cy.get('#alert-id').type('ny')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get(':nth-child(1) > .card-header > .info').contains('NY')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 149 items')
        cy.get('.form .simple-button').contains('Clear all').click() 

        //Scenario - search on valid location - in lowercase with space as prefix and suffix
        cy.get('#alert-id').type(' ny ')
        cy.get('.form .buttons > .bx--btn').click()
        cy.get(':nth-child(1) > .card-header > .info').contains('NY')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 149 items')
        cy.get('.form .simple-button').contains('Clear all').click() 
       }) 
});
