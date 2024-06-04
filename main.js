const alunos = [
    { nome: "Ana", nota: 7 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carlos", nota: 8 },
    { nome: "Daniela", nota: 4 },
    { nome: "Eduardo", nota: 9 },
    { nome: "Fernanda", nota: 6 }
];

function filtrarAlunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);