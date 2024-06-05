"use strict";
const multiplicar = (a, b) => {
    return a * b;
};
const saudacao = (nome) => {
    return `Olá ${nome}`;
};
const resultadoMultiplicacao = multiplicar(5, 3);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);
const mensagemSaudacao = saudacao('Adhan');
console.log(mensagemSaudacao);
