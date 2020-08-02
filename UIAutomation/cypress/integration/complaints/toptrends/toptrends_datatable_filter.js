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
    it('list only the Low Risk items in the table ', () => {
        cy.wait(2000)
        //Click on Regulatory Risk dropdown
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()
        //Select Low Risk item
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children()
        .contains('Low').click()
        cy.wait(2000)
        //Click Apply Button
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click()
        cy.wait(2000)
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr').should('have.length',1)
        //Click Clear Button  
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)
    })  
    it('list only the High Risk items in the table ', () => {
        cy.wait(2000)  
        //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()
        cy.wait(4000)
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children()
                .contains('High').click()
        cy.wait(1000)
        //Click Apply Button
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click()
        cy.wait(2000)
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr').should('have.length',10)
        cy.wait(4000)
        //Click Clear Button 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)        
    })      
    it('list only the Medium Risk items in the table ', () => {
       //Click on the dropdown button
       cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()
       cy.wait(4000)
       cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children()
               .contains('Medium').click()
       cy.wait(1000)
        //Click Apply Button
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click()
        cy.wait(2000)
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr').should('have.length',7)
        cy.wait(4000)
        //Click Clear Button 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000) 
    }) 
    it('list only the Low and Medium Risk items in the table ', () => {
        cy.wait(2000)
        //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()
        cy.wait(4000)
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children()
                .contains('Low').click()
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children()
                .contains('Medium').click()
        cy.wait(1000)
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click()  
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr').should('have.length',8)
        cy.wait(2000) 
        //Click Clear Button 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000) 
    })
    it('list only Weekly data in the table ', () => {    
        //Click on the dropdown
        cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.evidence-form .bx--list-box__menu').children()
                .contains('Weekly').click()
        cy.wait(1000)
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click()
        cy.get('.table-cntr .txt-center').contains('No Records Found.')
        cy.wait(4000)
        //Click Clear Button 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)
    });
    it('list only Monthly data in the table ', () => {
        //Click Clear Button 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000) 
        cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Select Monthly and click on Apply
        cy.get('.evidence-form .bx--list-box__menu').children()
                .contains('Monthly').click()
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click()
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr').should('have.length',10)
        cy.wait(4000)
        //Click Clear Button 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000) 
    })
    it('list only Quarterly data in the table ', () => {
        cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Select Quarterly and click on Apply
        cy.get('.evidence-form .bx--list-box__menu').children()
                .contains('Quarterly').click()
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click()
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr').should('have.length',6)
        cy.wait(4000)
        //Click Clear Button 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)
    })
    it('list only Yearly data in the table ', () => {
        cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
        //Select Yearly and click on Apply
        cy.get('.evidence-form .bx--list-box__menu').children()
                .contains('Yearly').click()
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click()
        cy.get('.table-cntr .txt-center').contains('No Records Found.')
        cy.wait(4000)
        //Click on Clear 
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
    })
});   