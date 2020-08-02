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

describe('Validate RootCause layout tab',() => {
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
    })
    it('check the label names in the left hand filter section', () =>{
        cy.wait(2000) 
        cy.get('#date-picker > :nth-child(1) > .bx--label').contains('Start Date')
        cy.wait(1000) 
        cy.get(':nth-child(2) > .bx--label').contains('End Date')
        cy.wait(1000) 
        cy.get(':nth-child(2) > :nth-child(1) > label').contains('Product')
        cy.wait(1000) 
        cy.get('.evidence-form > :nth-child(3) > :nth-child(1)').contains('Sub Product')
        cy.wait(1000) 
        cy.get(':nth-child(4) > :nth-child(1) > label').contains('Issue')
        cy.wait(1000) 
        cy.get('.evidence-form > :nth-child(5) > :nth-child(1)').contains('Sub Issue')
        cy.wait(1000) 
        cy.get(':nth-child(6) > :nth-child(1) > label').contains('State')
        cy.wait(1000)
        cy.get(':nth-child(7) > :nth-child(1) > label').contains('No of Keywords')
        cy.wait(1000) 
        cy.get(':nth-child(8) > :nth-child(1) > label').contains('No of Topics')
    }) 
    it('check the list of products in the dropdown', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(1000)
        cy.get('.bx--checkbox-label > span').click()    
        cy.wait(2000) 
        cy.get('.evidence-form .bx--multi-select .bx--list-box__menu-item .bx--checkbox-label').children()
            .should('contain','Checking or savings account')
            .and('have.length','1')
        cy.wait(2000)
        //Click on Clear filter 
        cy.get('.bx--btn-set > .bx--btn--secondary').click({force: true})
    })
    it('check Sub Product dropdown contents', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(1000)
        cy.get('.evidence-form .bx--multi-select .bx--list-box__menu-item').children()
            .should('contain','CD (Certificate of Deposit)')
            .should('contain','Checking account')
            .should('contain','Other banking product or service')
            .should('contain','Personal line of credit')
            .should('contain','Savings account')
            .and('have.length','5')
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        //Click on Clear filter 
        cy.get('.bx--btn-set > .bx--btn--secondary').click({force: true})
    })
    it('check Issues dropdown contents', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000) 
        cy.get('.evidence-form .bx--multi-select .bx--list-box__menu-item').children()
            .should('contain','Credit monitoring or identity theft protection services')
            .should('contain','Incorrect information on your report')
            .should('contain','Managing an account')
            .should('contain','Open or Close an account')
            .should('contain','Problem caused by your funds being low')
            .should('contain','Problem with a lender or other company charging your account')
            .should('contain','Problem with fraud alerts or security freezes')
            .and('have.length','7')
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        //Click on Clear filter 
        cy.get('.bx--btn-set > .bx--btn--secondary').click({force: true})
    })
    it('check Sub Issues dropdown contents', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.evidence-form .bx--multi-select .bx--list-box__menu-item').children()
            .should('contain','Overdrafts and overdraft fees')
            .should('contain','Unable to open an account')
            .and('have.length','27')  
        cy.wait(2000)     
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Click on Clear filter 
        cy.get('.bx--btn-set > .bx--btn--secondary').click({force: true})
        cy.wait(2000)
    })
    it('check State dropdown contents', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.evidence-form .bx--multi-select .bx--list-box__menu-item').children()
            .should('contain','AE')
            .should('contain','AK')
            .and('have.length','53') 
        cy.wait(2000)
        //Click on Clear filter 
        cy.get('.bx--btn-set > .bx--btn--secondary').click({force: true})
    })
})          