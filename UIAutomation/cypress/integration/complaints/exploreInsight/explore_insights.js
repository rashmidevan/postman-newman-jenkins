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

describe('Validate rootcause -> insights page',() => {
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
    it('click on Explore tab', () =>{    
        
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(4000) 
        cy.get('.bx--btn-set > .bx--btn--primary').click()
        cy.wait(2000)
        cy.get('.child-tab-container > :nth-child(1) > h2').contains('Product')
        cy.get(':nth-child(2) > h2').contains('Sub Product')
        cy.get(':nth-child(3) > h2').contains('Issue')
        cy.get(':nth-child(4) > h2').contains('Sub Issue')
        cy.get(':nth-child(5) > h2').contains('State')
    })
    it('check the contents of Product table', () =>{
        cy.wait(4000)
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(2000) 
        cy.get(':nth-child(1) > .title > :nth-child(1)').contains('Type')
        cy.get(':nth-child(1) > .title > :nth-child(2)').contains('# of complaints (%)')
        cy.get(':nth-child(1) > .card-row-container > .card-list > .row > .col-7').contains('Checking or savings account')
        cy.get(':nth-child(1) > .card-row-container > .card-list > .row > .col-5 > :nth-child(1)').contains('1610')   
    })
    it('check the contents of Sub Product table', () =>{
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(2000)
        cy.get(':nth-child(2) > .title > :nth-child(1)').contains('Type')        
        cy.get(':nth-child(2) > .title > :nth-child(2)').contains('# of complaints (%)')
        cy.get(':nth-child(2) > .card-row-container > .card-list > :nth-child(1) > .col-7').contains('Checking account')
        cy.get(':nth-child(2) > .card-row-container > .card-list > :nth-child(1) > .col-5 > :nth-child(1)').contains('1343')
    })
    it('check the contents of Issue table', () =>{
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .title > :nth-child(1)').contains('Type')     
        cy.get(':nth-child(3) > .title > :nth-child(2)').contains('# of complaints (%)')
        cy.get(':nth-child(3) > .card-row-container > .card-list > :nth-child(1) > .col-7').contains('Managing an account')
        cy.get(':nth-child(3) > .card-row-container > .card-list > :nth-child(1) > .col-5 > :nth-child(1)').contains('865')
    })
    it('check the contents of Sub Issue table', () =>{
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(2000)
        cy.get(':nth-child(4) > .title > :nth-child(1)').contains('Type')     
        cy.get(':nth-child(4) > .title > :nth-child(2)').contains('# of complaints (%)')
        cy.get(':nth-child(4) > .card-row-container > .card-list > :nth-child(1) > .col-7').contains('Deposits and withdrawals')
        cy.get(':nth-child(4) > .card-row-container > .card-list > :nth-child(1) > .col-5 > :nth-child(1)').contains('216')
    })
    it('check the contents of State table', () =>{
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(2000)
        cy.get(':nth-child(5) > .title > :nth-child(1)').contains('Type')     
        cy.get(':nth-child(5) > .title > :nth-child(2)').contains('# of complaints (%)')
        cy.get(':nth-child(5) > .card-row-container > .card-list > :nth-child(1) > .col-7').contains('CA')
        cy.get(':nth-child(5) > .card-row-container > .card-list > :nth-child(1) > .col-5 > :nth-child(1)').contains('369')
      //  cy.get(':nth-child(3) > .card-row-container > .card-list > :nth-child(1) > .col-5 > :nth-child(1)').contains('1730')
    })    
})
          