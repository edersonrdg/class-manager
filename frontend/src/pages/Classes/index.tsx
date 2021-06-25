import React from 'react';
import Header from '../../components/Header';

import {
    Container,
    ClassCard,
    CardContentContainer,
    StudentContainer,
    DeleteClassContainer,
} from './styles';

const Classes: React.FC = () => {
    return (
        <>
            <Header buttonText="Adicionar turma">Gestão de turmas</Header>
            <Container>
                <ClassCard>
                    <CardContentContainer>
                        <h4>a</h4>
                        <h4>a</h4>
                        <h4>a</h4>
                    </CardContentContainer>
                    <StudentContainer>
                        <h4>Alunos</h4>
                    </StudentContainer>
                    <DeleteClassContainer>
                        <h4>DEl</h4>
                    </DeleteClassContainer>
                </ClassCard>
            </Container>
        </>
    );
};

export default Classes;
