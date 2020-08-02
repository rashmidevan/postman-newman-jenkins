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
describe("Validate communication search page layout", () => {
    before(() => {
        window.sessionStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,820)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.loginWithUI('sisupervisor', 'password')
        cy.selectSISupervisorConf()
        cy.get('.cui-icon-string-img-header > .bx--btn__icon').click()
        cy.get(':nth-child(3) > a > .link').click()
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
        cy.get(':nth-child(3) > a > .link').click()
    }); 
    it('check the communication search page layout', () =>{
        //check the filter panel contents
        cy.get('.title').contains('Filters')
        cy.get('.form > :nth-child(1) > .bx--label').contains('Channel')
        cy.get('#date-picker > :nth-child(1) > .bx--label').contains('Start date')
        cy.get('.form :nth-child(2) > .bx--label').contains('End date')
        cy.get('.form :nth-child(3) > .bx--form-item > .bx--label').contains('Timestamp')
        cy.get('.form :nth-child(4) > .bx--form-item > .bx--label').contains('Employee Name')
        cy.get('.form :nth-child(5) > .bx--form-item > .bx--label').contains('Entity')
        cy.get('.form :nth-child(6) > .bx--form-item > .bx--label').contains('Case Id')
        cy.get('.form :nth-child(7) > .bx--form-item > .bx--label').contains('Lexicon')
        cy.get('.form :nth-child(8) > .bx--label').contains('Emotion')
        cy.get('.form :nth-child(9) > .bx--label').contains('Concepts')
        cy.get('.form :nth-child(10) > .bx--label').contains('Classification')
        cy.get('.form :nth-child(11) > .bx--form-item > .bx--label').contains('Login Name')
        cy.get('.form :nth-child(12) > .bx--form-item > .bx--label').contains('Phone')
        cy.get('.form :nth-child(13) > .bx--form-item > .bx--label').contains('Extension')
        cy.get('.form :nth-child(14) > .bx--form-item > .bx--label').contains('Device ID')
        cy.get('.form :nth-child(15) > .bx--label').contains('Duration')
        cy.get('.form :nth-child(16) > .bx--label').contains('Direction')
        cy.wait(2000)

        //check the default text content in each of the text box
        cy.get('.form #timestamp').should('have.attr', 'placeholder','HH:MM:SS')
        cy.get('.form #employee-name').should('have.attr', 'placeholder','Search Name')
        cy.get('.form #ticker').should('have.attr', 'placeholder','Search entity') 
        cy.get('.form #alert-id').should('have.attr', 'placeholder','Case Id')
        cy.get('.form #lexicon').should('have.attr', 'placeholder','Search Lexicon') 
        cy.get('.form #login-name').should('have.attr', 'placeholder','Enter Login Name') 
        cy.get('.form #phone-id').should('have.attr', 'placeholder','(+1)-204-353-7282') 
        cy.get('.form #extension').should('have.attr', 'placeholder','5749751')        
        cy.get('.form #device-id').should('have.attr', 'placeholder','Enter Device ID') 
        cy.wait(2000)        

        //check the dropdon contents of Emotion        
        cy.get('.form :nth-child(8) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .should('contain','Anger')
                .should('contain','Joy')
                .should('contain','Negative')
                .should('contain','Positive')
                .should('contain','Sad')
        cy.wait(1000)
        cy.get('.form :nth-child(8) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()

        //check the dropdon contents of Concept
        cy.get('.form :nth-child(9) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .should('contain','Recruit Conspirators')
                .should('contain','Recruit Victims')
        cy.wait(1000)
        cy.get('.form :nth-child(9) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()

        //check the dropdon contents of Classification
        cy.get('.form :nth-child(10) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .should('contain','Announcement')
                .should('contain','Business')
                .should('contain','Confidential')
                .should('contain','News')
                .should('contain','Non-Confidential')
                .should('contain','Non-Trading')
                .should('contain','Personal')
                .should('contain','Promotional')
                .should('contain','Trading')
        cy.wait(1000)
        cy.get('.form :nth-child(10) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()

        //check the presence of buttons
        cy.get('.form .simple-button').contains('Clear all')
        cy.get('.buttons > .bx--btn').contains('Apply filters')
        cy.wait(2000)

        //check the contents of right hand section
        cy.get('.right-content > .content #communication-advance-search').should('have.attr', 'placeholder','Search') 
        cy.get('.right-content > .content .sort-by-dropdown > label').contains('Sort By')
        cy.get('.right-content > .content .btn-export').contains('Export Files')
        
        //check on the buttons that needs to be in disabled state
        cy.get('.right-content > .content .btn-export').contains('Export Files').should('be.disabled')
        cy.get('.form #login-name').should('be.disabled')
        cy.get('.form #phone-id').should('be.disabled')
        cy.get('.form #extension').should('be.disabled') 
        cy.get('.form #device-id').should('be.disabled') 
    })
});
