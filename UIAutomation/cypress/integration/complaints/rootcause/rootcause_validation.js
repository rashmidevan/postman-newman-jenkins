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

describe('Validate topTrends ->trendingComplaints-> Visualization tab scenarios',() => {
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
    it('list only the Low Risk items in the Visualization tab', ()=>{
        cy.wait(2000)
        //Click on the Regulatory Risk dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        // Select Low Risk
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('Low').click()         
        //Click Apply
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click()
        cy.wait(2000) 
        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.wait(2000)
        cy.get('circle').should('have.length',1)
        //should('have.css','rgb(253, 197, 0)')
        cy.wait(1000)
    })
    it('list only the High Risk items in the Visualization tab', ()=>{
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000)
        //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        // Select High Risk
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('High').click()         
        //Click Apply
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click()
        cy.wait(2000) 
        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.wait(2000)
        //Check if the objects are circle and validate the count
        cy.get('circle').should('have.length',15)
        cy.wait(1000)
    })
    it('list only the Medium Risk items in the Visualization tab', ()=>{
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000)
        //Click Apply
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click()
        cy.wait(2000) 
        //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        // Select Medium Risk
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('Medium').click()         
        //Click Apply
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
        cy.wait(2000) 
        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.wait(2000)
        //Coheck if the objects are circle and validate the count
        cy.get('circle').should('have.length',7)
        cy.wait(1000)     
    })
    it('list only the High & Low Risk items in the Visualization tab', ()=>{
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000)
        //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        // Select High  & Medium Risk
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('High').click()         
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('Low').click()         
        cy.wait(2000)      
        //Click Apply
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
        cy.wait(2000) 
        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()

        cy.wait(2000)
        //Check if the objects are circle and validate the count
        cy.get('circle').should('have.length',16)
        cy.wait(1000)
    })
    it('list all -  High, Low & Medium Risk items in the Visualization tab', ()=>{
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000)
        //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        // Select Medium Low & High Risk
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('High').click()         
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('Low').click()         
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('Medium').click()         
        
        //Click Apply
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
        cy.wait(2000) 
        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()

        cy.wait(2000)
        //Check if the objects are circle and validate the count
        cy.get('circle').should('have.length',23)
        cy.wait(1000)
    })
    it('list all -Risk High & TimePeriod - Monthly in the Visualization tab', ()=>{
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000)

         //Select Monthy and click on Apply
         cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
         cy.get('#time-item-1').click()

         //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        //Select High Risk        
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('High').click()         
        cy.wait(2000)

         //Click Apply
         cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
         cy.wait(2000) 

        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()

        cy.wait(2000)
        //Coheck if the objects are circle and validate the count
        cy.get('circle').should('have.length',9)
        cy.wait(1000)
    })
    it('list all -  High, Medium Risk  & TimePeriod - Monthly in the Visualization tab', ()=>{
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000)

         //Select Monthy and click on Apply
         cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
         cy.get('#time-item-1').click()

         //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        //Select High Risk        
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('Medium').click()         
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('High').click()         
        cy.wait(2000)

         //Click Apply
         cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
         cy.wait(2000) 

        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()

        cy.wait(2000)
        //Check if the objects are circle and validate the count
        cy.get('circle').should('have.length',16)
        cy.wait(1000)
         //Click on Clear
         cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
         cy.wait(2000)
 
          //Click Apply
          cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
          cy.wait(2000) 
    })
    it('list all -  High risk and time period - Yearly  in the Visualization tab', ()=>{
         //Select Yearly and click on Apply
         cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
         cy.get('#time-item-3').click()

         //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        //Select High Risk        
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('High').click()         
        cy.wait(2000)

         //Click Apply
         cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
         cy.wait(2000) 

        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()

        cy.wait(2000)
        //Check if No Records Found message gets displayed
        cy.get('#alert-review-root > div > div:nth-child(2) > div > div > div > cui-appcontent-tag:nth-child(3) > div > div > div.complaints-container > cui-fragment-wrapper-tag > div > complaints-fragment > div > switch > div > div.main-container > div > div.right_content > div.table-cntr > div:nth-child(3) > div').contains('No Records Found.')
        cy.wait(1000)

    })
    it('list all -  High risk and time period - Quarterly  in the Visualization tab', ()=>{
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000)

         //Select Yearly and click on Apply
         cy.get(':nth-child(2) > .bx--dropdown > .bx--list-box__field > .bx--list-box__menu-icon').click()
         cy.get('#time-item-2').click()

         //Click on the dropdown button
        cy.get('.bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        //Select High Risk        
        cy.get('.evidence-form .bx--list-box .bx--list-box__menu .bx--list-box__menu-item').children().contains('High').click()         
        cy.wait(2000)
         //Click Apply
         cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
         cy.wait(2000) 

        //Click on Visualization
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()
        cy.get(':nth-child(2) > .bx--tabs__nav-link').click()

        cy.wait(2000)
        //Check if No Records Found message gets displayed
        cy.get('circle').should('have.length',6)
        cy.wait(1000)
        //Click on Clear
        cy.get('.evidence-form .bx--btn-set > .bx--btn--secondary').click() 
        cy.wait(2000) 
        //Click Apply
        cy.get('.evidence-form .bx--btn-set > .bx--btn--primary').click() 
        cy.wait(2000) 
    }) 
})