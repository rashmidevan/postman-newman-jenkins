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
describe("Validate communication search page for filter -caseid", () => {
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
    it('search email using valid entity', () =>{
        cy.get('.form #ticker').type('ABC')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .card-content > .sub-content > .communication-card-description > h1').contains('Joshua Parker')
        cy.get(':nth-child(1) > .card-content > .sub-content > .communication-card-details > :nth-child(2) > ul > li').contains('Joshua Parker')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-16 of 16 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using wildcard for valid entity', () =>{
        cy.get('.form #ticker').type('AB*')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .card-content > .sub-content > .communication-card-description > h1').contains('Joshua Parker')
        cy.get(':nth-child(1) > .card-content > .sub-content > .communication-card-details > :nth-child(2) > ul > li').contains('Joshua Parker')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-16 of 16 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid entity in lowercase', () =>{
        cy.get('.form #ticker').type('tam')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .card-content > .sub-content > .communication-card-description > h1').contains('Joshua Parker')
        cy.get(':nth-child(1) > .card-content > .sub-content > .communication-card-details > :nth-child(2) > ul > li').contains('Joshua Parker')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-13 of 13 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using invalid entity', () =>{
        cy.get('.form #employee-name').type('ABCD')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.algnCntr').contains('No Records Found')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
});
