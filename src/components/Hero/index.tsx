import React from 'react';
import { Form, Container, HeroTitle } from './styles';

const Hero: React.FC = () => (
    <Form>
        <Container className="container">
            <HeroTitle>
                As melhores vagas para tecnologia, design e artes visuais.
            </HeroTitle>
        </Container>
    </Form>
);

export default Hero;