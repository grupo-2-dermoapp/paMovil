const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de notificaciones',()=>{

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
        cy.get(':nth-child(5) > .item-has-start-slot').click()
        cy.wait(1000);

        

    });

    it('La página debe existir',()=>{
        cy.get('app-notificaciones').should('exist')
        
    });

    it('Debe existir por lo menos una notificacion',()=>{
        cy.get('ion-list[id="lista-consultas-medicas"]').then((items)=>{
                expect(items.length).to.be.greaterThan(0)
            })
        
    });

});