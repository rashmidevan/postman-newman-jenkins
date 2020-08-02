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
describe("Validate employee search page layout", () => {
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
    it('check the employee search page layout', () =>{
        //check the filter panel contents
        cy.get('.title').contains('Filters')
        cy.get('.form :nth-child(1) > .bx--form-item').contains('Employee Name')
        cy.get('.form :nth-child(2) > .bx--form-item > .bx--label').contains('Employee ID')
        cy.get('.form :nth-child(3) > .bx--form-item > .bx--label').contains('Location')
        cy.get('.form :nth-child(4) > .bx--label').contains('Role')
    
        //check the default text content in each of the text box
        cy.get('#employee-name').should('have.attr', 'placeholder','Search Name')
        cy.get('#ticker').should('have.attr', 'placeholder','Employee ID')
        cy.get('#alert-id').should('have.attr', 'placeholder','Search Location') 

        //check the presence of buttons
        cy.get('.form .simple-button').contains('Clear all')
        cy.get('.buttons > .bx--btn').contains('Apply filters')

        //check the pagination labels names in the footer
        cy.get('.bx--pagination .bx--pagination__left > :nth-child(1)').contains('Employees per page')
        cy.get('#bx-pagination-select-1').contains('30')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('| 1-30 of 149 items')
        cy.get('.bx--pagination__right > .bx--pagination__text').contains('1 of 5 pages')
    })
    it('check the role dropdown contents', () =>{
        cy.get('.bx--list-box__menu-icon > svg').click()
        cy.wait(3000)   
        cy.get('.bx--list-box__menu').children().contains('Trader')
        cy.get('.bx--list-box__menu').children().contains('Banker')
    })
});
