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

describe('Logout Scenarios ',() => {
    before(() => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,620)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.wait(3000)
        cy.loginWithUI('sisupervisor', 'password')
        cy.wait(3000)  
        cy.selectCompaintsSupervisorConf()
    });
    it('Check the usericon  list contents', () =>{
        cy.get('.user-acccount-menu-icon').click()
        cy.get('.alert-review-menu-label-div').children()
                .should('contain','Manage Templates')
                .and('contain','Help')
                .and('contain','About')
                .and('contain','Sign Out')
        cy.wait(1000)        
        cy.get('.alert-review-menu-label-div > :nth-child(4)').click()
    })
    it('Click on Signout', () =>{
        cy.get('.alert-review-menu-label-div > :nth-child(4)').click()
        cy.wait(3000)
    })
})