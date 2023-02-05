describe('Test de Crear consulta', () => {
    beforeEach(()=>{
        cy.viewport('iphone-x')
        cy.visit('crear-consulta')
        cy.wait(250)
    })
    it('Test formulario completo', () => {
        cy.get('ion-button[id="crear-consulta-button"]').click()
        cy.wait(250)
        cy.get('form').within(() => {
        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(5)
        });
    });
    });
    it('Test tipo lesion requerida', () => {
        cy.get('ion-select[formcontrolname="tipoLesion"]').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.get('form').within(() => {

        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    });
    it('Test forma lesion requerida', () => {
        cy.get('ion-select[formcontrolname="formaLesion"]').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.get('form').within(() => {

        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    });
    it('Test numero lesiones requerida', () => {
        cy.get('ion-select[formcontrolname="numeroLesiones"]').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.get('form').within(() => {

        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    });

    it('Test distribucion requerida', () => {
        cy.get('ion-select[formcontrolname="distribucion"]').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.get('form').within(() => {

        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    });
    it('Test parte del cuerpo requerida', () => {
        cy.get('ion-select[formcontrolname="tipoLesion"]').click()
        cy.wait(250);
        cy.get('#alert-input-1-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="formaLesion"]').click()
        cy.wait(250);
        cy.get('#alert-input-2-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="numeroLesiones"]').click()
        cy.wait(250);
        cy.get('#alert-input-3-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="distribucion"]').click()
        cy.wait(250);
        cy.get('#alert-input-4-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.wait(250)
        cy.get('ion-button[id="crear-consulta-button"]').click()
        cy.wait(250)

        cy.get('form').within(() => {

        cy.get('span').then(($divs)=>{
            expect($divs.length).to.equal(1)
        });
    });
    });

    it('Test Crear consulta auto-generada', () => {
        cy.get('ion-select[formcontrolname="tipoLesion"]').click()
        cy.wait(250);
        cy.get('#alert-input-1-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="formaLesion"]').click()
        cy.wait(250);
        cy.get('#alert-input-2-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="numeroLesiones"]').click()
        cy.wait(250);
        cy.get('#alert-input-3-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="distribucion"]').click()
        cy.wait(250);
        cy.get('#alert-input-4-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.wait(250)

        cy.get('ion-button[id="parte-cuerpo-button"]').click()
        cy.wait(250)

        cy.get('button[id="cabeza-button"]').click()
        cy.wait(250)

        cy.get('ion-select[formcontrolname="parteCuerpo"]').click()
        cy.wait(250);
        cy.get('#alert-input-6-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-button[id="seleccionar-parte-button"]').click()
        cy.wait(250)

        cy.get('ion-button[id="crear-consulta-button"]').click()
        cy.wait(250)

        cy.get('#alert-input-7-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(250)

        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:8100/inicio')
    });

    it('Test Crear consulta medico', () => {
        cy.get('ion-select[formcontrolname="tipoLesion"]').click()
        cy.wait(250);
        cy.get('#alert-input-1-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="formaLesion"]').click()
        cy.wait(250);
        cy.get('#alert-input-2-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="numeroLesiones"]').click()
        cy.wait(250);
        cy.get('#alert-input-3-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-select[formcontrolname="distribucion"]').click()
        cy.wait(250);
        cy.get('#alert-input-4-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()
        cy.wait(250)

        cy.get('ion-button[id="parte-cuerpo-button"]').click()
        cy.wait(250)

        cy.get('button[id="cabeza-button"]').click()
        cy.wait(250)

        cy.get('ion-select[formcontrolname="parteCuerpo"]').click()
        cy.wait(250);
        cy.get('#alert-input-6-0 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('OK').click()

        cy.get('ion-button[id="seleccionar-parte-button"]').click()
        cy.wait(250)

        cy.get('ion-button[id="crear-consulta-button"]').click()
        cy.wait(250)

        cy.get('#alert-input-7-1 > .alert-button-inner > .alert-radio-label').click()
        cy.wait(250);
        cy.get('button.alert-button').contains('Aceptar').click()
        cy.wait(250)

        cy.wait(1000);
        cy.url().should('eq', 'http://localhost:8100/inicio')
    });

    
  })