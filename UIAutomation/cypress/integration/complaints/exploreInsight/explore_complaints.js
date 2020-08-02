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

describe('validate the Explore-> Complaints page',() => {   
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
    it('check the table header labels', () =>{
        cy.clearCookies()
        cy.reload()
        cy.wait(6000) 
        cy.loginWithUI('sisupervisor', 'password') 
        cy.wait(4000)       
        //Click on Explore tab
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(4000)       
        //Click on Apply button
        cy.get('.bx--btn-set > .bx--btn--primary').click()
       //Click on Complaints tab
        cy.get(':nth-child(3) > .bx--tabs__nav-link').click()
        cy.wait(4000) 
        cy.get(':nth-child(2) > .w10 > .bx--table-header-label').contains('ID')
        cy.get(':nth-child(3) > .w10 > .bx--table-header-label').contains('Date')
        cy.get(':nth-child(4) > .w10 > .bx--table-header-label').contains('Channel')
        cy.get('.w40 > .bx--table-header-label').contains('Description')     
        cy.wait(4000)       
    })
    it('check the first row contents', () =>{
        //Sort on Date and check the first row details
        cy.get(':nth-child(3) > .w10 > .bx--table-sort-v2__icon > path').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('3114627')
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('01/02/2017')
        cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Web')
        cy.get('tbody > :nth-child(1) > :nth-child(5)').contains('I am having an issue that I can not seem to have resolved and have been trying to speak with a supervisor at Wells')
        cy.wait(4000)       
    })
    it('check the second row contents', () =>{
        cy.get('tbody > :nth-child(2) > :nth-child(2)').contains('3114982')
        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('01/02/2017')
        cy.get('tbody > :nth-child(2) > :nth-child(4)').contains('Web')
        cy.get('tbody > :nth-child(2) > :nth-child(5)').contains('On XX/XX/2018 I received an email that someone was trying to access my account from unauthorized computer')
        cy.wait(4000)       
    })
    it('Clicking on the first complaint must expand the complaint', () =>{
        cy.get(':nth-child(1) > .bx--table-expand-v2 > .bx--table-expand-v2__button > .bx--table-expand-v2__svg').click()
        cy.get('.table-expo-content > p').contains('I am having an issue that I can not seem to have resolved and have been trying to speak with a supervisor at Wells Fargo but have been leaving messages with no return calls. On XX/XX/18 I contracted XXXX XXXX with XXXX XXXX XXXX to provide floral services for my wedding which was supposed to be on XX/XX/18. I sent her {$390.00} on XX/XX/18. On XX/XX/18 my then fianc and I had to change the date of our wedding due to a financial emergency. We changed it to XX/XX/2018 but decided we would go on and get married which we did on XX/XX/2018. I informed XXXX about the change and she agreed with the date change ( I have included all correspondence in regards to this ). Sadly on XX/XX/2018 my husband had a massive XXXX XXXX and passed away. While I was grieving and making funeral arrangements I had an associate reach out to her in regards to refunding the deposit of {$390.00} she agreed. My associate contacted her on XX/XX/2018 and she stated that she would see how much the deposit was and contact her back. This was the last we heard from her. I have sent emails and messages with no response and decided to contact Wells Fargo to retrieve my money. I was told on XX/XX/2018 that I would not be able to dispute it because of the time that has passed. While I am very aware this transaction took place in XXXX I did not expect my husband to pass away. I called back multiple times since then to try to appeal the decision based on the circumstances and was escalated to a manager no one has contacted me back. I am very upset with the lack of empathy and poor customer service I have received in regards to this incident. I would not need to dispute this if the merchant would have gotten back with me nor if my husband had not unexpectedly passed away. I would like some sort of resolution regarding this because up until now I have not had any issues with Wells Fargo bank.')
        cy.wait(4000)       
        cy.get(':nth-child(1) > .bx--table-expand-v2 > .bx--table-expand-v2__button > .bx--table-expand-v2__svg').click()
        cy.get(':nth-child(1) > .bx--table-expand-v2 > .bx--table-expand-v2__button > .bx--table-expand-v2__svg').click()
        cy.get('[data-child-row="true"] > td').click()
        cy.wait(4000)
    })
    it('Clicking on the first complaint must open a new page', () =>{
        cy.clearCookies()
        cy.reload()
        cy.wait(6000) 
        cy.loginWithUI('sisupervisor', 'password') 
        cy.wait(8000)       
        //Click on Explore tab
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(4000)       
        //Click on Apply button
        cy.get('.bx--btn-set > .bx--btn--primary').click()
       //Click on Complaints tab     
        cy.get(':nth-child(3) > .bx--tabs__nav-link').click()
        cy.wait(4000) 
        cy.get(':nth-child(1) > .bx--table-expand-v2 > .bx--table-expand-v2__button > .bx--table-expand-v2__svg').click()
        cy.get('.table-expo-content > p').click()        
        cy.get('.evd-dtl > .evd_dtl_hdrInfor > span').contains('Details')
        cy.get('.evd-dtl-bdy > .evd_dtl_hdrInfor > span').contains('Complaint')
        cy.get('.hozLst > :nth-child(1) > :nth-child(1)').contains('ID')
        cy.get('.hozLst > :nth-child(1) > :nth-child(2)').contains('3114627')
        cy.get('.hozLst > :nth-child(2) > :nth-child(1)').contains('Location')
        cy.get('.hozLst > :nth-child(2) > :nth-child(2)').contains('NC')
        cy.get('.hozLst > :nth-child(3) > :nth-child(1)').contains("Date of Complaint")
        cy.get('.hozLst > :nth-child(3) > :nth-child(2)').contains('01/02/2017')
        cy.get('.hozLst > :nth-child(4) > :nth-child(1)').contains('Source')
        cy.get('.hozLst > :nth-child(4) > :nth-child(2)').contains('Web')
        cy.get('.evd_drop_sec > :nth-child(1) > :nth-child(1) > label').contains('Product')
        cy.get('.evd_drop_sec > :nth-child(2) > :nth-child(1) > label').contains('Issue')
        cy.get('.m10p').contains('I am having an issue that I can not seem to have resolved and have been trying to speak with a supervisor at Wells Fargo but have been leaving messages with no return calls. On XX/XX/18 I contracted XXXX XXXX with XXXX XXXX XXXX to provide floral services for my wedding which was supposed to be on XX/XX/18. I sent her {$390.00} on XX/XX/18. On XX/XX/18 my then fianc and I had to change the date of our wedding due to a financial emergency. We changed it to XX/XX/2018 but decided we would go on and get married which we did on XX/XX/2018. I informed XXXX about the change and she agreed with the date change ( I have included all correspondence in regards to this ). Sadly on XX/XX/2018 my husband had a massive XXXX XXXX and passed away. While I was grieving and making funeral arrangements I had an associate reach out to her in regards to refunding the deposit of {$390.00} she agreed. My associate contacted her on XX/XX/2018 and she stated that she would see how much the deposit was and contact her back. This was the last we heard from her. I have sent emails and messages with no response and decided to contact Wells Fargo to retrieve my money. I was told on XX/XX/2018 that I would not be able to dispute it because of the time that has passed. While I am very aware this transaction took place in XXXX I did not expect my husband to pass away. I called back multiple times since then to try to appeal the decision based on the circumstances and was escalated to a manager no one has contacted me back. I am very upset with the lack of empathy and poor customer service I have received in regards to this incident. I would not need to dispute this if the merchant would have gotten back with me nor if my husband had not unexpectedly passed away. I would like some sort of resolution regarding this because up until now I have not had any issues with Wells Fargo bank.')
        cy.get('.key-hdr').contains('Annotations')
        cy.get('.annotate-view-section').contains('No Annotations Found')
        cy.wait(4000)
    })
    it('Clicking on the back button should take you to Complaints page', () =>{
        cy.get('.compl-nav-center > svg > path').click()
        cy.get('.type').contains('Total Complaints')
        cy.get(':nth-child(1) > .bx--table-expand-v2 > .bx--table-expand-v2__button > .bx--table-expand-v2__svg').click()
    })
    it('expand the second row contents', () =>{
        cy.clearCookies()
        cy.reload()
        cy.wait(2000) 
        cy.loginWithUI('sisupervisor', 'password') 
        cy.wait(8000)       
        //Click on Explore tab
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(4000)       
        //Click on Apply button
        cy.get('.bx--btn-set > .bx--btn--primary').click()
       //Click on Complaints tab     
        cy.get(':nth-child(3) > .bx--tabs__nav-link').click()
        cy.wait(4000) 
        //Sort on Date and check the first row details
        cy.get(':nth-child(3) > .w10 > .bx--table-sort-v2__icon > path').click()
        cy.get(':nth-child(2) > .bx--table-expand-v2 > .bx--table-expand-v2__button > .bx--table-expand-v2__svg').click()
        cy.get('.table-expo-content > p').contains('On XX/XX/2018 I received an email that someone was trying to access my account from unauthorized computerI immediately contacted my bank Wells Fargo ask them to place a freeze on my account which day did they said the only way to access my account would be too coming to the local branch and do transactions that wayI thought everything was fine few days later someone went in my account and sent my account into the negative {$1000.00} Wells Fargo said they would investigate it would take up to 90 days after their investigation they closed my account and trying to hold me responsible for the money taken out of my accountafter research I found it Wells Fargo has done this to several other people in the New York area this is not the first time that theyve done this')
        cy.wait(4000)       
        cy.get(':nth-child(2) > .bx--table-expand-v2 > .bx--table-expand-v2__button > .bx--table-expand-v2__svg').click()
    })
    it('check the footer details', () =>{
        cy.get('.bx--pagination__left > :nth-child(1)').contains('Items per page')
        cy.get('#bx-pagination-select-2').contains('30')
        cy.get('.bx--pagination__left > :nth-child(3)').contains('1-30 of 1610 items')
        cy.get('.bx--pagination__right > .bx--pagination__text').contains('1 of 54 pages')
        cy.wait(4000)       
    })
    it('click on page forward/backward button actions', () =>{
        cy.get('.bx--pagination__button--forward').click()
        cy.wait(2000)
        cy.get('.bx--pagination__button--backward').click()    
        cy.wait(2000)
    })
    it('click on the forward page(2nd page) and validate the contents', () =>{
        cy.clearCookies()
        cy.reload()
        cy.wait(2000) 
        cy.loginWithUI('sisupervisor', 'password') 
        cy.wait(8000)       
        //Click on Explore tab
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(4000)       
        //Click on Apply button
        cy.get('.bx--btn-set > .bx--btn--primary').click()
       //Click on Complaints tab     
        cy.get(':nth-child(3) > .bx--tabs__nav-link').click()
        cy.wait(4000) 
        //Sort on Date and check the first row details
        cy.get(':nth-child(3) > .w10 > .bx--table-sort-v2__icon > path').click()
        cy.get('.bx--pagination__button--forward').click()
        cy.wait(4000)
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('3177671')
        cy.wait(4000)
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('3/12/2017')
        cy.wait(4000)
        cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Web')
        cy.get('tbody > :nth-child(1) > :nth-child(5)').contains('Hello In 2016 I had an account with Wells Fargo I have a confirmed case of Identity Fraud through the IRS and fra')
        cy.wait(2000)        
        cy.get('.bx--pagination__left > :nth-child(3)').contains('31-60 of 1610 items')
        cy.wait(2000)
        cy.get('.bx--pagination__right > .bx--pagination__text').contains('2 of 54 pages')
        cy.wait(2000)
        cy.get('#bx-pagination-select-4').contains('2')
        cy.wait(2000)       
    })
    it('navigate using the page select button and validate the contents', () =>{
        cy.clearCookies()
        cy.reload()
        cy.wait(2000) 
        cy.loginWithUI('sisupervisor', 'password') 
        cy.wait(8000)       
        //Click on Explore tab
        cy.get(':nth-child(3) > .cui-in-basket-button').click()
        cy.wait(7000)       
        //Click on Apply button
        cy.get('.bx--btn-set > .bx--btn--primary').click()
       //Click on Complaints tab     
        cy.get(':nth-child(3) > .bx--tabs__nav-link').click()
        cy.wait(4000) 
        //Sort on Date and check the first row details
        cy.get(':nth-child(3) > .w10 > .bx--table-sort-v2__icon > path').click()
        cy.wait(4000) 
        cy.get('#bx-pagination-select-4').select('5')
        cy.wait(2000)
        cy.get('tbody > :nth-child(1) > :nth-child(2)').contains('3103560')
        cy.wait(2000)        
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('6/18/2017')
        cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('Web')
        cy.get('tbody > :nth-child(1) > :nth-child(5)').contains('On XX/XX/18 Wellsfargo Bank unfairly revoked my debit card after filing claims for non received merchandise')
        cy.wait(2000)        
        cy.get('.bx--pagination__left > :nth-child(3)').contains('121-150 of 1610 items')
        cy.get('#bx-pagination-select-4').contains('5')
    })
})        