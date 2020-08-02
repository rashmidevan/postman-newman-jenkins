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

describe('Validate topTrends ->trendingComplaints-> Visualization tab layout',() => {

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
    it('Check if the High Medium Low icons are displayed  in the Visualization tab', ()=>{
       //Click Clear Filter
       cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
       cy.wait(3000)

        //Click on Visualization 
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.wait(4000)
        cy.get('table > :nth-child(1) > :nth-child(2) > div').contains('High')
        cy.wait(1000)
        cy.get('table > :nth-child(2) > :nth-child(2) > div').contains('Medium')
        cy.wait(1000)
        cy.get('table > :nth-child(3) > :nth-child(2) > div').contains('Low')
        cy.wait(1000)
        //Click Apply
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
        cy.wait(2000) 
    })
    it('Check the mousehover tooltip info for Low Risk  in the Visualization tab', ()=>{
        cy.wait(2000)
        //Click on Regulatory Risk dropdown
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon > svg > path').click()
        cy.wait(2000)
        //Select Low Risk item
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('Low').click()         
        cy.wait(2000)
        //Click Apply Button
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click()
        cy.wait(2000)
        cy.get('.table-cntr > div:nth-child(2) > div > div > div > table > tbody > tr').should('have.length',1)
        cy.wait(2000) 
        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        
        cy.wait(2000)
        cy.get('circle').trigger('mouseover',{force:true})
    })    
})
