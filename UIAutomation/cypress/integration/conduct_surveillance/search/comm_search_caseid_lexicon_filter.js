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
describe("Validate communication search page for filters - caseid and lexicon ", () => {
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
    it('search email using valid caseid', () =>{
        cy.get('.form #alert-id').type('1')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-8 of 8 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using invalid caseid', () =>{
        cy.get('.form #alert-id').type('11')
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
    it('search email using caseid prefixed with zero', () =>{
        //Product issue
        cy.get('.form #alert-id').type('06')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        //Making the test pass
        cy.get('.algnCntr').contains('No Records Found')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid caseid prefixed with space', () =>{
        cy.get('.form #employee-name').type(' Joshua ')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 45 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid lexicon - ticker', () =>{
        cy.get('.form #lexicon').type('ticker')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 58 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid lexicon - recruit victims', () =>{
        cy.get('.form #lexicon').type('recruitvictims')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-24 of 24 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid lexicon - recruit conspirators', () =>{
        cy.get('.form #lexicon').type('recruitconspirators')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-17 of 17 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid lexicon - insider information', () =>{
        cy.get('.form #lexicon').type('insiderinformation')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-7 of 7 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid lexicon prefix with space', () =>{
        cy.get('.form #lexicon').type(' insiderinformation')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-7 of 7 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using valid lexicon suffix with space', () =>{
        cy.get('.form #lexicon').type('insiderinformation ')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-7 of 7 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using wildcard character for lexicon', () =>{
        cy.get('.form #lexicon').type('*')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(1000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 64 items')
        cy.wait(1000)
        cy.get('.form .simple-button').click()
    })
    it('search email using invalid lexicon', () =>{
        cy.get('.form #lexicon').type('insiderinformations')
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
