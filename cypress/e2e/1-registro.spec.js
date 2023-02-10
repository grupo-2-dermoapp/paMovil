const mockData = require("../fixtures/mock-data.json")
const expectedData = require("../fixtures/expect-data.json")

describe('Test de Registro usuario', () => {
    beforeEach(()=>{
        cy.viewport('iphone-x')
        cy.visit('registro')
        cy.wait(250)
    })
    it('Test formulario completo', () => {
        cy.get('ion-button[id="register-button"]').click()
        cy.wait(250)
        cy.get('form').within(() => {
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(8)
        });
    });
    })
    it('Test nombre requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test nombre minimo 4 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.short)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test nombre maximo 60 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.long)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email invalido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type(mockData.password.good)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test edad requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="edad"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test edad minima 18', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="edad"]').type(mockData.age.min)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test edad maxima 99', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="edad"]').type(mockData.age.max)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test residencia requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="residencia"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test residencia minimo 4 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="residencia"]').type(mockData.name.short)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test residencia maximo 20 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="residencia"]').type(mockData.country.bad)
            cy.get('ion-input[formcontrolname="email"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test contraseña requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.short)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.long)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.command.backspace)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.short)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test confirmar contraseña maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.long)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña igual a contraseña', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.bad)
            cy.get('ion-input[formcontrolname="nombre"]').type(mockData.command.backspace)
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test Perfil dermatologico requerido', ()=>{
        cy.get('ion-checkbox[formcontrolname="terminosCondiciones"]').click()
        cy.get('ion-input[formcontrolname="email"]').type(mockData.password.good)
        cy.get('ion-input[formcontrolname="edad"]').type(mockData.age.good)
        cy.get('ion-input[formcontrolname="residencia"]').type(mockData.country.good)
        cy.get('ion-input[formcontrolname="nombre"]').type(mockData.name.good)
        cy.get('ion-input[formcontrolname="password"]').type(mockData.password.good)
        cy.get('ion-input[formcontrolname="passwordConfirmation"]').type(mockData.password.good)
        cy.wait(250)
        cy.get('ion-button[id="register-button"]').click()
        cy.wait(250)
        cy.get('ion-alert').should('be.visible');
        
    });

    it('Test Perfil dermatologico sin valores', ()=>{
        cy.get('ion-button[id="perfil-dermatologico-button"]').click()
        cy.wait(250)

        cy.get('ion-button[id="crear-perfil-button"]').click()
        cy.wait(250)

        cy.get('form[id="perfil-from"]').within(() => {
            cy.get('span').then(($divs)=>{
                expect($divs.length).to.equal(10)
            });
        })
        
    });
    
    it('Test terminos y condiciones requerida', ()=>{
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

        cy.wait(250)
        cy.get('ion-button[id="register-button"]').click()
        cy.wait(250)
        cy.get('form').within(() => {
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
        })
        
    });

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