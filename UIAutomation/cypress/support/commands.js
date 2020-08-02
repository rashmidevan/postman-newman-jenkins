Cypress.Commands.add('loginWithUI', (username, passwd) =>{
    cy.get('#login-username').type(username)
    cy.get('#login-password').type(passwd)
    cy.get('#login-button').click()    
    })
Cypress.Commands.add('selectCompaintsSupervisorConf', () =>{
        cy.get('.bx--list-box__field').click()
        cy.wait(8000)
        cy.get('.bx--modal-content .bx--list-box__menu').children()
                .contains('si-complaints - supervisor').click()
        //Click on Select button
        cy.get(13000)
        cy.get('.select-config-form > .bx--modal > .bx--modal-container > .bx--modal-footer > .bx--btn').click()
        cy.wait(8000)
    })
Cypress.Commands.add('selectSISupervisorConf', () =>{
        cy.get('.bx--list-box__field').click()
        cy.wait(8000)
        cy.get('.bx--modal-content .bx--list-box__menu').children()
                .contains('si - supervisor').click()
        //Click on Select button
        cy.get(13000)
        cy.get('.select-config-form > .bx--modal > .bx--modal-container > .bx--modal-footer > .bx--btn').click()
        cy.wait(8000)
    })