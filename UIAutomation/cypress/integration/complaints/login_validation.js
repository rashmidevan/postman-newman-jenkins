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

describe('Login Scenarios with valid and invalid user/credentials',() => {
    it('valid userid - sisupervisor and invalid credentials', () => {
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.loginWithUI('sisupervisor', 'junk123')
        cy.wait(4000)
        cy.get('#login-error-message').contains('Username or Password incorrect.')
    })
   it('invalid userid - Administrator ', () => {
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.loginWithUI('Administrator', 'password')
        cy.wait(4000)
        cy.get('#login-error-message').contains('Username or Password incorrect.')
    })
    it('valid userid - sisupervisor and credentials', () =>{
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.wait(3000)
        cy.loginWithUI(Cypress.env("supervisorUser"), Cypress.env("supervisorPassword"))
        cy.location('pathname').should('eq','/home')
        cy.title().should('include', 'IBM Financial Crimes Insight')
        cy.get('h4').contains('IBM Financial Crimes Insight')
        cy.wait(2000)
        cy.get('h2').contains('Welcome, !')
        cy.wait(4000)
        cy.selectCompaintsSupervisorConf()
    })
})