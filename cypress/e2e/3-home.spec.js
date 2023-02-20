const expectedData = require("../fixtures/expect-data.json")
const mockData = require("../fixtures/mock-data.json")

describe('Test de Inicio', () => {

    beforeEach(()=>{
        cy.viewport('iphone-x')
        cy.wait(250);
        cy.visit('')
        cy.wait(250);
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-button[id="login-button"]').click()
            cy.wait(5000)
        })

    })
    it('Test link de crear consulta', () => {

        cy.get('ion-button[id="crear-consulta-button"]').click()
        cy.wait(1000)
        cy.url().should('eq', expectedData.page.crearConsulta)
    })
  })