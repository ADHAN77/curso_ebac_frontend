/// <reference types="cypress" />

describe('Gerenciar contatos existentes', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app');
    });

    it('deve adicionar um novo contato com sucesso', () => {
        cy.get('input[placeholder="Nome"]').type('Novo Contato');
        cy.get('input[placeholder="E-mail"]').type('novo.contato@example.com');
        cy.get('input[placeholder="Telefone"]').type('123456789');
        cy.get('button.adicionar').click();

        cy.contains('Novo Contato').should('exist');
        cy.contains('novo.contato@example.com').should('exist');
        cy.contains('123456789').should('exist');
    });

    it('deve editar um contato existente com sucesso', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').first().within(() => {
            cy.get('button.edit').click();
        });

        cy.get('input[placeholder="Nome"]').clear().type('Contato Editado');
        cy.get('input[placeholder="E-mail"]').clear().type('contato.editado@example.com');
        cy.get('input[placeholder="Telefone"]').clear().type('987654321');
        cy.get('button[type="submit"]').click();

        cy.contains('Contato Editado').should('exist');
        cy.contains('contato.editado@example.com').should('exist');
        cy.contains('987654321').should('exist');
    });

    it('deve apagar um contato existente com sucesso', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').first().within(() => {
            cy.get('button.delete').click();
        });

        cy.on('window:confirm', () => true);

        cy.contains('Contato Editado').should('not.exist');
        cy.contains('contato.editado@example.com').should('not.exist');
        cy.contains('987654321').should('not.exist');
    });
});