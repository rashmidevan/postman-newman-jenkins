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
        cy.wait(3000)
        //Select Configuration as sisupervisor      
        cy.selectCompaintsSupervisorConf()
    });
   it('check the sorting functionality - on the column Regulatory Risk  ', () => {
        cy.wait(2000)
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)
        //Click on the sort button of Regulatory Risk
        cy.get('.table-cntr :nth-child(1) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        //Must display High Risk items at the beginning
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td.risk-score').contains('High')
        cy.wait(2000) 
        //Click on sort ascending
        cy.get('.table-cntr :nth-child(1) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.wait(2000) 
        //Must display Low Risk items at the beginning - product issue
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td.risk-score').contains('Low')
    })    
    it('check the sorting functionality - on the column Theme  ', () => {
        cy.wait(2000)
        //Clear all the filters
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000) 
        //Click on the sort button of Theme
        cy.get('.table-cntr :nth-child(2) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div').contains('Checking account')
        cy.wait(2000) 
        //Click on the unsort button of Theme
        cy.get('.table-cntr :nth-child(2) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.wait(2000) 
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div').contains('Checking account in FL')   
    })
    it('check the sorting functionality - on the column "# of Complaints"  ', () => {
        //Clear all the filters
        cy.wait(2000)
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000) 
        //Click on the sort button of "# of Complaints"
        cy.get('.table-cntr :nth-child(3) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3)').contains('18')
        cy.wait(4000)
        //Click on the unsort button of "# of Complaints"
        cy.get('.table-cntr :nth-child(3) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.wait(4000) 
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(3)').contains('743')       
    })
    it('check the sorting functionality - on the column "Start Date"  ', () => {
        //Clear all the filters
        cy.wait(2000)
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)
        //Click on the sort button of "Start Date"
        cy.get('.table-cntr :nth-child(4) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4)').contains('04/26/2017')
        cy.wait(2000) 
        //Click on the unsort button of "Start Date"
        cy.get('.table-cntr :nth-child(4) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.wait(2000)        
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(4) > div').contains('08/28/2017')       
    })
    it('check the sorting functionality - on the column "Duration(days)"  ', () => {
        cy.wait(2000)
        //Clear all the filters
        cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
        cy.wait(2000)
        //Click on the sort button of "Duration"
        cy.get('.table-cntr :nth-child(6) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(6)').contains('30')
        cy.wait(2000) 
        //Click on the unsort button of "Duration"
        cy.get('.table-cntr :nth-child(6) > .bx--table-sort-v2 > .bx--table-sort-v2__icon > path').click()
        cy.wait(2000) 
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(6)').contains('90')
    })
    it('check the sorting functionality - on the column "Trending"  ', () => {
        cy.wait(2000)
        cy.viewport(1200,620)
       //Clear all the filters - By default Week will be chosen
       cy.get('.evidence-form .bx--btn-set .bx--btn--secondary').click()
       cy.wait(2000)
       cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5)').contains('+65.89%') 
       cy.wait(2000)  
       //Select Trending Menu              
       cy.get('.trending-limit-container > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
       //Select Month
       cy.wait(2000)
       cy.get('.table-cntr .trending-limit-container .bx--list-box__menu').children()
               .contains('Month').click()
       cy.wait(2000)
       cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5)').contains('-11.93%')

       //Select Trending Menu   
       cy.wait(2000)
       cy.get('.trending-limit-container > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
       cy.wait(2000)
       //Select Quarter   
       cy.get('.table-cntr .trending-limit-container .bx--list-box__menu').children()
               .contains('Quarter').click()
       cy.wait(1000)
       cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5)').contains('---')
       //Select Trending Menu 
       cy.wait(2000)
       cy.get('.trending-limit-container > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
       cy.wait(1000)
       //Select Year
       cy.get('.table-cntr .trending-limit-container .bx--list-box__menu').children()
               .contains('Year').click()
       cy.wait(2000)
       cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr:nth-child(1) > td:nth-child(5)').contains('---')
   })
});