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

describe('Explore page layout validation',() => {

    before(() => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,820)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.wait(3000)
        cy.loginWithUI('sisupervisor', 'password')
        cy.wait(8000)
        //Select Configuration as sisupervisor      
        cy.selectCompaintsSupervisorConf()
    });
    it('click on Explore tab', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(2000) 
    })    
    it('check the label names', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(1) > .bx--label').contains('Start Date')
        cy.wait(1000) 
        cy.get(':nth-child(2) > .bx--label').contains('End Date')
        cy.wait(1000) 
        cy.get(':nth-child(2) > :nth-child(1) > label').contains('Product')
        cy.wait(1000) 
        cy.get(':nth-child(3) > :nth-child(1)').contains('Sub Product')
        cy.wait(1000) 
        cy.get(':nth-child(4) > :nth-child(1) > label').contains('Issue')
        cy.wait(1000) 
        cy.get(':nth-child(5) > :nth-child(1) > label').contains('Sub Issue')
        cy.wait(1000) 
        cy.get(':nth-child(6) > :nth-child(1) > label').contains('State')
        cy.wait(1000)
    })  
    it('check if all the contents under Product can be selected/unselected', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.bx--checkbox-label > span').click()    
        cy.wait(2000) 
        //Minimise the dropdown
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Uncheck the selected ones
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__selection > svg').click()
        cy.wait(2000)
    })   
    it('check if all the contents under SubProduct can be selected/unselected', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-8-item-0 > .bx--form-item').click({force: true})
        cy.get('#downshift-8-item-1 > .bx--form-item').click({force: true})
        cy.get('#downshift-8-item-2 > .bx--form-item').click({force: true})
        cy.get('#downshift-8-item-3 > .bx--form-item').click({force: true})
        cy.get('#downshift-8-item-4 > .bx--form-item').click({force: true})
        cy.wait(4000)
        //Minimise the dropdown
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Uncheck the selected ones
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__selection > svg').click()
    })
    it('check if all the contents under Issues can be selected/unselected', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-9-item-0 > .bx--form-item').click({force: true})
        cy.get('#downshift-9-item-1 > .bx--form-item').click({force: true})
        cy.get('#downshift-9-item-2 > .bx--form-item').click({force: true})
        cy.get('#downshift-9-item-3 > .bx--form-item').click({force: true})
        cy.get('#downshift-9-item-4 > .bx--form-item').click({force: true})
        cy.get('#downshift-9-item-5 > .bx--form-item').click({force: true})
        cy.get('#downshift-9-item-6 > .bx--form-item').click({force: true})
        cy.wait(4000)        
        //Minimise the dropdown
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()    
        //Uncheck the selected ones by clicing on the X mark
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__selection > svg').click()
        cy.wait(2000)
    })    
    it('check if all the contents under SubIssues can be selected/unselected', () =>{
        cy.wait(2000) 
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-10-item-0 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-1 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-2 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-3 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-4 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-5 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-6 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-7 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-8 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-9 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-10 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-11 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-12 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-13 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-14 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-15 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-16 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-17 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-18 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-19 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-20 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-21 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-22 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-23 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-24 > .bx--form-item').click({force: true})
        cy.get('#downshift-10-item-25 >.bx--form-item').click({force: true})
        cy.wait(2000)       
        //Minimize the dropdown
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Click on Xmark to clear the filter        
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__selection > svg').click()
        cy.wait(2000)
    })
    it('check if all the contents under States can be selected/unselected', () =>{
        cy.wait(2000)     
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-11-item-0 > .bx--form-item')
        cy.get('#downshift-11-item-1 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-2 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-3 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-3 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-4 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-5 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-6 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-7 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-8 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-9 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-10 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-11 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-12 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-13 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-14 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-15 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-16 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-17 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-18 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-19 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-20 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-21 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-22 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-23 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-24 > .bx--form-item').click({force: true})
        cy.get('#downshift-11-item-25 > .bx--form-item').click({force: true})
        //Minimize the dropdown
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Click on Xmark to clear the filter
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__selection > svg').click()
        cy.wait(2000)
        cy.wait(2000)
    })
    it('check Product dropdown contents', () =>{
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