/// <reference types="cypress" />

describe('Testando as funcionalidades da agenda de contatos', () => {

    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
    });

    it('deve adicionar um novo contato com sucesso', () => {
        cy.get('input[placeholder="Nome"]').type('Novo Contato');
        cy.get('input[placeholder="E-mail"]').type('novocontato@example.com');
        cy.get('input[placeholder="Telefone"]').type('123456789');

        cy.get('button.adicionar').click();

        cy.contains('Novo Contato').should('exist');
        cy.contains('novocontato@example.com').should('exist');
        cy.contains('123456789').should('exist');
    });


    it('deve editar um contato com sucesso', () => {
        cy.contains('Novo Contato')
            .parent()
            .parent()
            .find('button.edit')
            .click();

        cy.get('input[placeholder="Nome"]').clear().type('Contato Editado');
        cy.get('input[placeholder="E-mail"]').clear().type('contatoeditado@example.com');
        cy.get('input[placeholder="Telefone"]').clear().type('111222333');

        cy.get('button.adicionar').click();

        cy.contains('Contato Editado').should('exist');
        cy.contains('contatoeditado@example.com').should('exist');
        cy.contains('111222333').should('exist');
    });

    it('deve apagar um contato com sucesso', () => {
        cy.contains('Contato Editado')
            .parent()
            .parent()
            .find('button.delete')
            .click();

        cy.contains('Contato Editado').should('not.exist');
    });
});