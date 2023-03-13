const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de Registro usuario', () => {
    beforeEach(()=>{
        cy.viewport('iphone-x')
        cy.visit('')
        cy.wait(250)
        cy.get('#registro').click()
        cy.wait(500)
    })
        it('Registro usuario correcto', ()=>{
        cy.get('ion-checkbox[formcontrolname="terminosCondiciones"]').click()
        cy.get('ion-input[formcontrolname="email"]').type(mockData.email.good)
        cy.get('ion-input[formcontrolname="edad"]').type(mockData.age.good)
        cy.get('ion-input[formcontrolname="residencia"]').type(mockData.country.good)
        cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.good)
        cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
        cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.good)
        cy.wait(250)
        cy.get('ion-button[id="perfil-dermatologico-button"]').click()
        cy.wait(250)


        cy.get('ion-select[formcontrolname="colorOjos"]').click()
        cy.wait(250);
        cy.get('#alert-input-2-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="colorCabello"]').click()
        cy.wait(250);
        cy.get('#alert-input-3-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="colorPiel"]').click()
        cy.wait(250);
        cy.get('#alert-input-4-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="cantidadPecas"]').click()
        cy.wait(250);
        cy.get('#alert-input-5-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="exposicionAlSol"]').click()
        cy.wait(250);
        cy.get('#alert-input-6-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="bronceadoConElSol"]').click()
        cy.wait(250);
        cy.get('#alert-input-7-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="cantidadBronceado"]').click()
        cy.wait(250);
        cy.get('#alert-input-8-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="sensibilidadDeCaraConSol"]').click()
        cy.wait(250);
        cy.get('#alert-input-9-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="frecuenciaBronceo"]').click()
        cy.wait(250);
        cy.get('#alert-input-10-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="ultimaExposicion"]').click()
        cy.wait(250);
        cy.get('#alert-input-11-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-button[id="crear-perfil-button"]').click()

        cy.wait(5000)
        cy.get('ion-button[id="register-button"]').click({force:true})

        cy.wait(7500);
        cy.url().should('eq', expectedData.page.login)
        
    });
  })