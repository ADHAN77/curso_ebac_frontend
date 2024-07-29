import React, { useState } from 'react';
import FormVagas from '../FormVagas';
import Vaga from '../Vaga';
import { VagasList } from './ListaVagas.styled';

type VagaType = {
    id: string;
    titulo: string;
    localizacao: string;
    nivel: string;
    modalidade: string;
    salarioMin: number;
    salarioMax: number;
    requisitos: string[];
};

const vagas: VagaType[] = [
    {
        id: '1',
        titulo: 'Desenvolvedor front-end',
        localizacao: 'remoto',
        nivel: 'junior',
        modalidade: 'clt',
        salarioMin: 3000,
        salarioMax: 4500,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
        id: '2',
        titulo: 'Desenvolvedor NodeJS',
        localizacao: 'remoto',
        nivel: 'pleno',
        modalidade: 'pj',
        salarioMin: 5000,
        salarioMax: 6500,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
        id: '3',
        titulo: 'Desenvolvedor fullstack',
        localizacao: 'remoto',
        nivel: 'pleno',
        modalidade: 'pj',
        salarioMin: 4000,
        salarioMax: 6000,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
        id: '4',
        titulo: 'Designer de interfaces',
        localizacao: 'remoto',
        nivel: 'junior',
        modalidade: 'clt',
        salarioMin: 4000,
        salarioMax: 5000,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
        id: '5',
        titulo: 'Desenvolvedor front-end',
        localizacao: 'remoto',
        nivel: 'senior',
        modalidade: 'clt',
        salarioMin: 7000,
        salarioMax: 8000,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
        id: '6',
        titulo: 'Desenvolvedor front-end para projeto internacional',
        localizacao: 'remoto',
        nivel: 'senior',
        modalidade: 'pj',
        salarioMin: 12000,
        salarioMax: 15000,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    },
    {
        id: '7',
        titulo: 'Desenvolvedor front-end',
        localizacao: 'São Paulo/SP',
        nivel: 'junior',
        modalidade: 'clt',
        salarioMin: 4000,
        salarioMax: 5000,
        requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
    }
];

const ListaVagas: React.FC = () => {
    const [filtro, setFiltro] = useState<string>('');

    const vagasFiltradas = vagas.filter(
        (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
    );

    return (
        <div>
            <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
            <VagasList>
                {vagasFiltradas.map((vaga) => (
            <Vaga
                key={vaga.id}
                titulo={vaga.titulo}
                localizacao={vaga.localizacao}
                nivel={vaga.nivel}
                modalidade={vaga.modalidade}
                salarioMin={vaga.salarioMin}
                salarioMax={vaga.salarioMax}
                requisitos={vaga.requisitos}
            />
            ))}
            </VagasList>
        </div>
    );
};

export default ListaVagas;
