const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de agendar cita',()=>{

    beforeEach(()=>{
        cy.viewport('iphone-x')
        cy.wait(250);
        cy.visit('')
        cy.wait(250);
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-button[id="login-button"]').click()
        });

        cy.wait(5000)
        cy.get('.buttons-first-slot > .md').click()
        cy.wait(1000)
        cy.get(':nth-child(4) > .item-has-start-slot').click()
        cy.wait(1000);
        cy.get('ion-list[id="lista-consultas-medicas"]').within(() => {
            cy.get(':nth-child(1) > .button').click()
        })
        cy.wait(1000);

        

    });

    it('Debe existir el boton agendar cita ',()=>{
        cy.get('ion-button[id="button-agendar-cita"]').should('exist')
    })

    it('Agendar cita',()=>{
        cy.get('ion-button[id="button-agendar-cita"]').click()
        cy.wait(1000)
        cy.url().should('contains', expectedData.page.inicio)
    });

});