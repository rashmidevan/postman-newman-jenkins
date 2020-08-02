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
describe("Validate communication search page for emotion - anger/joy/negative/positive/sad", () => {
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
        cy.wait(2000)
    }); 
    it('search email on concept - recruit victims', () =>{
        cy.get('.form #alert-id').type('1')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form :nth-child(9) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Recruit Victims').click()
        cy.wait(2000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)

        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-1 of 1 items')
        cy.get('.communication-card .communication-card-description > p').contains('Baby Boomers are getting older. The U.S. population is spending more on health care as more become insured. At the same time, select medical devices are being deployed to combat everything imaginable. Now is the perfect time to be...')
    })
    it('search email on concept - recruit conspirators ', () =>{
        cy.get('.form #alert-id').type('2')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form :nth-child(9) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Recruit Conspirators').click()
        cy.wait(2000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.communication-card .communication-card-description > p').contains('I know that you have been going through tough time over last 6 months post the market crash. I am bringing you this opportunity that would help you recover from your past loss and make fortune. We have been connected...')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-1 of 1 items')
    })
});