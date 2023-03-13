const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de Login', () => {
    beforeEach(()=>{
        cy.viewport('iphone-x')
        cy.visit('')
        cy.wait(500)
    })
    it('Test login correcto', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
        });

        cy.get('ion-button[id="login-button"]').click()
        cy.wait(5000)
        cy.url().should('eq', expectedData.page.inicio)
    });
  })