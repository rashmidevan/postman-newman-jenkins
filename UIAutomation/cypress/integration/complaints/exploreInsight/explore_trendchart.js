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

describe('Validate Explore-> Trend Chart page scenarios',() => {
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
    it('Check the trenchart', () =>{  
        //Click on Explore tab
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(2000)

        //Click on Apply filter
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click()
        cy.wait(9000)
       
        //Click on Trend Chart
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.wait(21000) 
        cy.get('.dynamic-trend-hdr').contains('Dynamic Trend Chart')
        cy.wait(8000) 

        cy.get('.legend > :nth-child(1) > :nth-child(2)').contains('DAILY COUNT OF COMPLAINTS')
        cy.get('.legend > :nth-child(2) > :nth-child(2)').contains('7-DAY MOVING AVERAGE')
        cy.get('.text').contains('EARLY TREND DETECTION')
        cy.get('svg.trend-chart')
    })
})        