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
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test nombre minimo 4 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type('123')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test nombre maximo 60 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="nombre"]').type('123456789012345678901234567890123456789012345678901234567890X')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test email invalido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="email"]').type('123123')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test edad requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="edad"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test edad minima 18', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="edad"]').type(17)
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test edad maxima 99', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="edad"]').type(101)
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test residencia requerido', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="residencia"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test residencia minimo 4 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="residencia"]').type('123')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test residencia maximo 20 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="residencia"]').type('1234567890-1234567890X')
            cy.get('ion-input[formcontrolname="email"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test contraseña requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('12345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test contraseña maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('1234567890123456789012345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña requerida', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('{backspace}')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña minimo 6 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('12345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    it('Test confirmar contraseña maximo 24 caracteres', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('1234567890123456789012345')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test confirmar contraseña igual a contraseña', ()=>{
        cy.get('form').within(() => {
            cy.get('ion-input[formcontrolname="password"]').type('123456')
            cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('123455')
            cy.get('ion-input[formcontrolname="nombre"]').type('{backspace}')
        })
        cy.wait(250);
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });

    it('Test Perfil dermatologico requerido', ()=>{
        cy.get('ion-checkbox[formcontrolname="terminosCondiciones"]').click()
        cy.get('ion-input[formcontrolname="email"]').type('test@test.com')
        cy.get('ion-input[formcontrolname="edad"]').type(20)
        cy.get('ion-input[formcontrolname="residencia"]').type('Bogota')
        cy.get('ion-input[formcontrolname="nombre"]').type('Esto es un nombre de test')
        cy.get('ion-input[formcontrolname="password"]').type('123456')
        cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('123456')
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
        cy.get('ion-input[formcontrolname="email"]').type('test2@test.com')
        cy.get('ion-input[formcontrolname="edad"]').type(20)
        cy.get('ion-input[formcontrolname="residencia"]').type('Bogota')
        cy.get('ion-input[formcontrolname="nombre"]').type('Esto es un nombre de test')
        cy.get('ion-input[formcontrolname="password"]').type('123456')
        cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('123456')
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
        cy.get('ion-input[formcontrolname="email"]').type('test1234@test.com')
        cy.get('ion-input[formcontrolname="edad"]').type(20)
        cy.get('ion-input[formcontrolname="residencia"]').type('Colombia')
        cy.get('ion-input[formcontrolname="nombre"]').type('Esto es un nombre de test')
        cy.get('ion-input[formcontrolname="password"]').type('123456')
        cy.get('ion-input[formcontrolname="passwordConfirmation"]').type('123456')
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
        cy.url().should('eq', 'http://localhost:8100/login')
        
    });
  })