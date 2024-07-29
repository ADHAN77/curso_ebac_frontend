import React from 'react';
import { ListItem, Title, Link } from './styles';

type Props = {
    titulo: string;
    localizacao: string;
    nivel: string;
    modalidade: string;
    salarioMin: number;
    salarioMax: number;
    requisitos: string[];
};

const Vaga: React.FC<Props> = (props) => (
    <ListItem>
        <Title>{props.titulo}</Title>
        <ul>
            <li>Localização: {props.localizacao}</li>
            <li>Senioridade: {props.nivel}</li>
            <li>Tipo de contratação: {props.modalidade}</li>
            <li>
            Salário: {props.salarioMin} - {props.salarioMax}
            </li>
            <li>Requisitos: {props.requisitos.join(', ')}</li>
        </ul>
        <Link href="#">
            Ver detalhes e candidatar-se
        </Link>
    </ListItem>
);

export default Vaga;
