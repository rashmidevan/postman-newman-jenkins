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

context('Validate the functionality of rootcause page by selecting various filter options',() => {    
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
    it('check if all the complaints gets listed when only Apply filter is clicked', () =>{
        cy.viewport(1200,820)
        cy.wait(2000)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click()
        cy.wait(23000) 
        cy.get('.topicMdlCntr .topic-box-cntr h2 > span').contains('Topic 1')
        cy.wait(4000)
        cy.get('.topicMdlCntr .topic-box-cntr > h3').contains('1608 Complaints')
        cy.wait(4000)
       }) 
       it('check if all the complaints -1608 gets listed when product-> checking or savings account filter is selected', () =>{
        cy.reload() //This is a bug Apply filter will not work unless reloaded
        cy.loginWithUI('sisupervisor', 'password')
        cy.viewport(1200,820)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()     
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.bx--checkbox-label > span').click()    
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000) 
        //Click on Apply Filter
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click({force:true})
        cy.wait(25000) 
        cy.get('.topicMdlCntr .topic-box-cntr h2 > span').contains('Topic 1')
        cy.wait(2000)
        cy.get('.topicMdlCntr .topic-box-cntr > h3').contains('1608 Complaints')
        cy.wait(2000) 
    })
    it('check if 28 complaints get listed for product-> checking or savings account filter, SubProduct-> CD', () =>{
        cy.reload() //This is a bug Apply filter will not work unless reloaded
        cy.loginWithUI('sisupervisor', 'password')
        cy.viewport(1200,820)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()     
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000) 
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-3-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.wait(2000) 
        //Click on Apply Filter
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click({force:true})
        cy.wait(28000) 
        cy.get('.topicMdlCntr .topic-box-cntr h2 > span').should('be.visible')
          .contains('Topic 1')
        cy.get('.topicMdlCntr .topic-box-cntr > h3').contains('28 Complaints')
        cy.wait(2000) 
    })
    it('check if 3 complaints get listed for Product, SubProduct,Issues, States', () =>{
        cy.reload() //This is a bug Apply filter will not work unless reloaded
        cy.loginWithUI('sisupervisor', 'password')
        cy.viewport(1200,820)
        cy.wait(2000)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()     
        
        //Select Product
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.bx--checkbox-label > span').click()
        cy.wait(2000)
        
        //Select SubProduct-> CD (Certificate of Deposit)
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-3-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.wait(2000)
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        
        //Select Issues-> Credit Monitoring & Managing an account
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-4-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-4-item-2 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.wait(2000)
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()

        //Select 7 states
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-6-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-1 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-2 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-3 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-4 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-5 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-6 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.wait(2000)
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        
        //Click on Apply Filter
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click({force:true})
        cy.wait(25000) 
        cy.get('.topicMdlCntr .topic-box-cntr h2 > span').contains('Topic 1')
        cy.get('.topicMdlCntr .topic-box-cntr > h3').contains('3 Complaints')
        cy.wait(2000) 
    })
    it('check if 114 complaints get listed for product, SubIssue', () =>{
        cy.reload() //This is a bug Apply filter will not work unless reloaded
        cy.loginWithUI('sisupervisor', 'password')
        cy.viewport(1200,820)
        cy.wait(2000)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()     

        //Select Product->Checking or savings account
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.bx--checkbox-label > span').click() 
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()         
        cy.wait(2000) 

        //Select Sub Issue -> banking errors
        cy.wait(2000) 
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-5-item-3 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        
        //Click on Apply Filter
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click({force:true})
        cy.wait(20000) 
        cy.get('.topicMdlCntr .topic-box-cntr h2 > span').contains('Topic 1')
        cy.get('.topicMdlCntr .topic-box-cntr > h3').contains('114 Complaints')
        cy.wait(2000) 
    })
    it('check if 20 complaints get listed for product(all),subproduct(all),Issues(all) SubIssue(2),States(6)', () =>{
        cy.reload() //This is a bug Apply filter will not work unless reloaded
        cy.loginWithUI('sisupervisor', 'password')
        cy.viewport(1200,820)
        cy.wait(2000)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()     

        //Select Product->all
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.bx--checkbox-label > span').click() 
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()         
        cy.wait(2000) 

        //Select SubProduct->all
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-3-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-3-item-1 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-3-item-2 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-3-item-3 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-3-item-4 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get(':nth-child(3) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)

        //Select Issues
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-4-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-4-item-1 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-4-item-2 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-4-item-3 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-4-item-4 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-4-item-5 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-4-item-6 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get(':nth-child(4) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)

        //Select Sub Issue ->2
        cy.wait(2000) 
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-5-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-5-item-1 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get(':nth-child(5) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.wait(2000)
        
        //Select State ->first 6
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('#downshift-6-item-0 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-1 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-2 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-3 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-4 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get('#downshift-6-item-5 > .bx--form-item > .bx--checkbox-label > span').click({force: true})
        cy.get(':nth-child(6) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        
        //Click on Apply Filter
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click({force:true})
        cy.wait(30000) 
        cy.get('.topicMdlCntr .topic-box-cntr h2 > span').contains('Topic 1')
        cy.get('.topicMdlCntr .topic-box-cntr > h3').contains('20 Complaints')
        cy.wait(2000) 
    })
    it('check if 6 topics gets dislayed  when product and no of topics 6 is selected', () =>{
        cy.reload() //This is a bug Apply filter will not work unless reloaded
        cy.loginWithUI('sisupervisor', 'password')
        cy.viewport(1200,820)
        cy.wait(2000)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()     
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.bx--checkbox-label > span').click()    
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()  
        
        //Increment the topics count to 6
        cy.get(':nth-child(8) > :nth-child(2) > .bx--form-item > .bx--number > .bx--number__controls > .bx--number__control-btn.up-icon').click()
        cy.wait(2000) 

        //Click on Apply Filter
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click({force:true})
        cy.wait(30000) 
        //Validate the topic number and count
        cy.get('#alert-review-root > div > div:nth-child(2) > div > div > div > cui-appcontent-tag:nth-child(3) > div > div > div.complaints-container > cui-fragment-wrapper-tag > div > complaints-fragment > div > switch > div > div.main-container > div > div.right-container > div > div.topicHdrCnt').contains('Total Topics (6)')
        cy.get('#alert-review-root > div > div:nth-child(2) > div > div > div > cui-appcontent-tag:nth-child(3) > div > div > div.complaints-container > cui-fragment-wrapper-tag > div > complaints-fragment > div > switch > div > div.main-container > div > div.right-container > div > div.topicMnuCntr > div > h2 > span').contains('Topic 1')
        cy.get(':nth-child(1) > h3 > .editLink').contains('902 Complaints')

        cy.get(':nth-child(2) > h2 > span').contains('Topic 2')
        cy.get(':nth-child(2) > h3 > .editLink').contains('116 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(3) > h2 > span').contains('Topic 3')
        cy.get(':nth-child(3) > h3 > .editLink').contains('202 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(4) > h2 > span').contains('Topic 4')
        cy.get(':nth-child(4) > h3 > .editLink').contains('158 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(5) > h2 > span').contains('Topic 5')
        cy.get(':nth-child(5) > h3 > .editLink').contains('125 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(6) > h2 > span').contains('Topic 6')
        cy.get(':nth-child(6) > h3 > .editLink').contains('105 Complaints')
        cy.wait(2000) 
    })
    it('check if 11 topics gets dislayed  when the topics is incremented twice', () =>{
        cy.reload() //This is a bug Apply filter will not work unless reloaded
        cy.loginWithUI('sisupervisor', 'password')
        cy.viewport(1300,820)
        cy.wait(2000)
        cy.get(':nth-child(2) > .cui-in-basket-button').click()     
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()
        cy.get('.bx--checkbox-label > span').click()    
        cy.get(':nth-child(2) > :nth-child(2) > .bx--multi-select > .bx--list-box__field > .bx--list-box__menu-icon').click()  
        cy.wait(2000)
        //Increment the topics count to 6
        cy.get(':nth-child(8) > :nth-child(2) > .bx--form-item > .bx--number > .bx--number__controls > .bx--number__control-btn.up-icon').click()
        cy.wait(2000) 
        cy.get(':nth-child(8) > :nth-child(2) > .bx--form-item > .bx--number > .bx--number__controls > .bx--number__control-btn.up-icon').click()
        cy.wait(2000) 

        //Click on Apply Filter
        cy.get('.evidence-form .bx--btn-set .bx--btn--primary').click({force:true})
        cy.wait(25000) 
        //Validate the topic number and count
        cy.get('#alert-review-root > div > div:nth-child(2) > div > div > div > cui-appcontent-tag:nth-child(3) > div > div > div.complaints-container > cui-fragment-wrapper-tag > div > complaints-fragment > div > switch > div > div.main-container > div > div.right-container > div > div.topicHdrCnt').contains('Total Topics (11)')
        cy.wait(2000) 
        cy.get(':nth-child(1) > h2 > span').contains('Topic 1')
        cy.get(':nth-child(1) > h3 > .editLink').contains('722 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(7) > h2 > span').contains('Topic 7')
        cy.get(':nth-child(7) > h3 > .editLink').contains('17 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(8) > h2 > span').contains('Topic 8')
        cy.get(':nth-child(8) > h3 > .editLink').contains('87 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(10) > h2 > span').contains('Topic 10')
        cy.get(':nth-child(10) > h3 > .editLink').contains('68 Complaints')
        cy.wait(2000) 
        cy.get(':nth-child(11) > h2 > span').contains('Topic 11')
        cy.get(':nth-child(11) > h3 > .editLink').contains('28 Complaints')
        cy.wait(2000) 
    })
})