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
describe("Validate communication search filters for email", () => {
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
    it('search email using employee firstname', () =>{
        cy.get('.form #employee-name').type('Joshua')
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
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 45 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using employee lastname', () =>{
        cy.get('.form #employee-name').type('Parker')
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
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 45 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using invalid employee', () =>{
        cy.get('.form #employee-name').type('Rama')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.algnCntr').contains('No Records Found')
        cy.get('.form .simple-button').click()
    })
    it('search email using wildcard *', () =>{
        cy.get('.form #employee-name').type('*')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 242 items')
        cy.get('.form .simple-button').click()
    })
    it('search email with space appended', () =>{
        cy.get('.form #employee-name').type('Samantha ')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 33 items')
        cy.get('.form .simple-button').click()
    })
    it('search email with name in uppercase', () =>{
        cy.get('.form #employee-name').type('SAMANTHA')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 33 items')
        cy.get('.form .simple-button').click()
    })
    it('search email with name in lowercase', () =>{
        cy.get('.form #employee-name').type('samantha')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 33 items')
        cy.get('.form .simple-button').click()
    })
});
