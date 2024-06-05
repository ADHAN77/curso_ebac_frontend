const multiplicar = (a: number, b: number): number => {
    return a * b;
};

const saudacao = (nome: string): string => {
    return `Olá ${nome}`;
};

const resultadoMultiplicacao = multiplicar(5, 3);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`);

const mensagemSaudacao = saudacao('Adhan');
console.log(mensagemSaudacao);