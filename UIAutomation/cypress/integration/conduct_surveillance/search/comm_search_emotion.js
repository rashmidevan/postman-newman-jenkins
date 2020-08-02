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
    it('search email using emotion - anger for caseid 1 ', () =>{
        cy.get('.form #alert-id').type('1')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        
        cy.get('.form :nth-child(8) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Anger').click()
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.communication-list > :nth-child(1) > .card-content > .sub-content > .communication-card-description > p').contains('Hi Today was another bad day. I am frustrated here at work where things are hectic and creating all sorts of chaos. All the good work goes un-noticed. I hate when people put up un-necessary pressure due their mis-doings. I...')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-1 of 1 items')        
    })   
    it('search email using emotion - joy for caseid 1 ', () =>{
        cy.get('.form #alert-id').type('1')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        
        cy.get('.form :nth-child(8) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Joy').click()
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.communication-list > :nth-child(1) > .card-content > .sub-content > .communication-card-description > p').contains('Hi Congrats on your achievement. You well deserve it. when is the party !!! I wish you all the best in your new role. ...')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-2 of 2 items')
    })
    it('search email using emotion - negative for caseid 1 ', () =>{
        cy.get('.form #alert-id').type('1')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        
        cy.get('.form :nth-child(8) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Negative').click()
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.communication-list > :nth-child(1) > .card-content > .sub-content > .communication-card-description > p').contains('Hi Today was another bad day. I am frustrated here at work where things are hectic and creating all sorts of chaos. All the good work goes un-noticed. I hate when people put up un-necessary pressure due their mis-doings. I...')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-5 of 5 items')      
    })
    it('search email using emotion - positive  for caseid 1 ', () =>{
        cy.get('.form #alert-id').type('1')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        
        cy.get('.form :nth-child(8) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Positive').click()
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.communication-list > :nth-child(1) > .card-content > .sub-content > .communication-card-description > p').contains('Hi Congrats on your achievement. You well deserve it. when is the party !!! I wish you all the best in your new role. ...')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-2 of 2 items')
    })
    it('search email using emotion - sad  for caseid 1 ', () =>{
        cy.get('.form #alert-id').type('1')
        cy.wait(1000)
        cy.get('.form :nth-child(1) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon >svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Email').click()
        cy.wait(1000)
        
        cy.get('.form :nth-child(8) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg').click()
        cy.wait(2000)
        cy.get('.form .bx--multi-select .bx--list-box__menu .bx--form-item').children()
                .contains('Sad').click()
        cy.get('.form .buttons > .bx--btn').click()
        cy.wait(2000)
        cy.get('.communication-list > :nth-child(1) > .card-content > .sub-content > .communication-card-description > p').contains('Hi Past few weeks have been hectic. No luck at all. Few transactions did not go well. Customers were little unhappy with me. Management also. Even I am unhappy about the happenings. I think i need to take a break...')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-1 of 1 items')
    })
});