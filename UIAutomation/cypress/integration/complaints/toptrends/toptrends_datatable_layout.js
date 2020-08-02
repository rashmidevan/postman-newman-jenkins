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
describe("Validate topTrends ->trendingComplaints-> datatable scenarios", () => {
    before(() => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        cy.clearCookies();
        cy.viewport(1200,820)
        cy.visit(Cypress.env("siDashboardUrl"))
        cy.wait(3000)
        cy.loginWithUI('sisupervisor', 'password')
        cy.wait(13000)
        cy.selectCompaintsSupervisorConf()
    });
    it('check the labels names in headband', () =>{
        cy.get('.cui-product-name').contains('IBM Surveillance Insight')
        cy.get(':nth-child(1) > .cui-in-basket-button').contains('Top Trends')
        cy.get(':nth-child(2) > .cui-in-basket-button').contains('Root Cause')
        cy.get(':nth-child(3) > .cui-in-basket-button').contains('Explore')        
    })      
    it('check the labels names in the filter panel', () =>{
        cy.get('.left_content > :nth-child(1) > .filter-cntr > .filter-panel').contains('Filter')
        cy.get('.evidence-form > div:nth-child(1) > div:nth-child(1) > label').contains('Regulatory Risk')
        cy.get('.evidence-form > :nth-child(2) > :nth-child(1) > label').contains('Time Period')
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').contains('Clear')
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').contains('Apply Filter')
        cy.get(':nth-child(1) > .cui-in-basket-button').contains('Top Trends')
        cy.get(':nth-child(2) > .cui-in-basket-button').contains('Root Cause')
        cy.get(':nth-child(3) > .cui-in-basket-button').contains('Explore')        
    })
    it('check the options under Time Period dropdown', ()=>{
        cy.wait(2000)
        //Click on the dropdown button
        cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()
        cy.wait(4000)
        //Add steps to check the options   
        cy.wait(4000)
        cy.get('.evidence-form .bx--list-box__menu').children()
            .should('contain','Weekly')
            .and('contain','Monthly')
            .and('contain','Quarterly')
            .and('contain','Yearly')
            .and('have.length','4')
        cy.wait(1000)
        cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()     
    })
    it('check the options under Regulatory Risk dropdown', ()=>{
        cy.wait(2000)
        //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()
        cy.wait(4000)
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children()
            .should('contain','High')
            .and('contain','Low')
            .and('contain','Medium')
            .and('have.length','3')
        cy.wait(1000)
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()        
    })
    it('check the table names', () => {
        cy.wait(2000)
        cy.get('.tbl_hdr_lbl').contains('Trending Complaints')
    })
    it('check the tab names of Trending Complaints table ', () => {
        cy.get('.bx--tabs__nav-item--selected > .bx--tabs__nav-link').contains('Data table')
        cy.get(':nth-child(2) > .bx--tabs__nav-link').contains('Visualization')
    })
    it('check the columns names of data table tab', () => {
        //Clear all the filters
        cy.wait(2000)
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)
        cy.get('.bx--tabs__nav-item--selected > .bx--tabs__nav-link').click()
        cy.get(':nth-child(1) > .bx--table-sort-v2 > .bx--table-header-label').contains('Regulatory Risk')
        cy.get(':nth-child(2) > .bx--table-sort-v2 > .bx--table-header-label').contains('Theme')
        cy.get(':nth-child(3) > .bx--table-sort-v2 > .bx--table-header-label').contains('# of Complaints')
        cy.get(':nth-child(4) > .bx--table-sort-v2 > .bx--table-header-label').contains('Start Date')
        cy.get('.trending-limit-container > :nth-child(1)').contains('Trending')
        cy.get('.trending-limit-container > .bx--dropdown > .bx--list-box__field > .bx--list-box__label').contains('Week')
        cy.get(':nth-child(6) > .bx--table-sort-v2 > .bx--table-header-label').contains('Duration (days)')
        cy.wait(1000)
    })    
    it('check the footer details for the pagination', () => {
        cy.wait(2000)     
        cy.get('.bx--pagination > .bx--pagination__left > .bx--pagination__text').contains('Items per page')
        cy.wait(2000)
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-10 of 23 items')
        cy.wait(2000)
        cy.get('.bx--pagination > .bx--pagination__right > .bx--pagination__text').contains('1 of 3 pages')
        cy.wait(1000) 
    })    
});