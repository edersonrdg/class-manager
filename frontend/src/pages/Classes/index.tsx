import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import {
    Container,
    Content,
    ClassCard,
    CardContentContainer,
    StudentContainer,
    DeleteClassContainer,
} from './styles';

const Classes: React.FC = () => {
    return (
        <>
            <Header>Gestão de turmas</Header>
            <Container>
                <Content>
                    <ClassCard>
                        <CardContentContainer>
                            <h4>Turma A</h4>
                            <h4>2019</h4>
                            <h4>30 Alunos</h4>
                        </CardContentContainer>
                        <Link to="/students">
                            <StudentContainer>
                                <h4>Alunos</h4>
                            </StudentContainer>
                        </Link>
                        <DeleteClassContainer>
                            <h4>DEl</h4>
                        </DeleteClassContainer>
                    </ClassCard>
                    <ClassCard>
                        <CardContentContainer>
                            <h4>Turma A</h4>
                            <h4>2019</h4>
                            <h4>30 Alunos</h4>
                        </CardContentContainer>
                        <Link to="/students">
                            <StudentContainer>
                                <h4>Alunos</h4>
                            </StudentContainer>
                        </Link>
                        <DeleteClassContainer>
                            <h4>DEl</h4>
                        </DeleteClassContainer>
                    </ClassCard>
                    <ClassCard>
                        <CardContentContainer>
                            <h4>Turma A</h4>
                            <h4>2019</h4>
                            <h4>30 Alunos</h4>
                        </CardContentContainer>
                        <Link to="/students">
                            <StudentContainer>
                                <h4>Alunos</h4>
                            </StudentContainer>
                        </Link>
                        <DeleteClassContainer>
                            <h4>DEl</h4>
                        </DeleteClassContainer>
                    </ClassCard>
                    <ClassCard>
                        <CardContentContainer>
                            <h4>Turma A</h4>
                            <h4>2019</h4>
                            <h4>30 Alunos</h4>
                        </CardContentContainer>
                        <Link to="/students">
                            <StudentContainer>
                                <h4>Alunos</h4>
                            </StudentContainer>
                        </Link>
                        <DeleteClassContainer>
                            <h4>DEl</h4>
                        </DeleteClassContainer>
                    </ClassCard>
                </Content>
                <form>
                    <input type="text" placeholder=" Nome da Turma" required />
                    <input type="date" placeholder="ano" />

                    <button type="button">Adicionar Turma</button>
                </form>
            </Container>
        </>
    );
};

export default Classes;
