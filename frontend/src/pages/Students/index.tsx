import React from 'react';
import Header from '../../components/Header';

import {
    Container,
    Content,
    StudentCard,
    StudentCardContent,
    DeleteStudentCard,
} from './styles';

const Students: React.FC = () => {
    return (
        <>
            <Header>Alunos Turma A</Header>
            <Container>
                <Content>
                    <StudentCard>
                        <StudentCardContent>
                            <h4>123123</h4>
                            <h4>Joao da silva</h4>
                            <h4>Joao@gmail.com</h4>
                        </StudentCardContent>
                        <DeleteStudentCard>
                            <h4>Del</h4>
                        </DeleteStudentCard>
                    </StudentCard>
                    <StudentCard>
                        <StudentCardContent>
                            <h4>123123</h4>
                            <h4>Joao da silva</h4>
                            <h4>Joao@gmail.com</h4>
                        </StudentCardContent>
                        <DeleteStudentCard>
                            <h4>Del</h4>
                        </DeleteStudentCard>
                    </StudentCard>
                    <StudentCard>
                        <StudentCardContent>
                            <h4>123123</h4>
                            <h4>Joao da silva</h4>
                            <h4>Joao@gmail.com</h4>
                        </StudentCardContent>
                        <DeleteStudentCard>
                            <h4>Del</h4>
                        </DeleteStudentCard>
                    </StudentCard>
                    <StudentCard>
                        <StudentCardContent>
                            <h4>123123</h4>
                            <h4>Joao da silva</h4>
                            <h4>Joao@gmail.com</h4>
                        </StudentCardContent>
                        <DeleteStudentCard>
                            <h4>Del</h4>
                        </DeleteStudentCard>
                    </StudentCard>
                    <StudentCard>
                        <StudentCardContent>
                            <h4>123123</h4>
                            <h4>Joao da silva</h4>
                            <h4>Joao@gmail.com</h4>
                        </StudentCardContent>
                        <DeleteStudentCard>
                            <h4>Del</h4>
                        </DeleteStudentCard>
                    </StudentCard>
                    <StudentCard>
                        <StudentCardContent>
                            <h4>123123</h4>
                            <h4>Joao da silva</h4>
                            <h4>Joao@gmail.com</h4>
                        </StudentCardContent>
                        <DeleteStudentCard>
                            <h4>Del</h4>
                        </DeleteStudentCard>
                    </StudentCard>
                </Content>
                <form>
                    <input type="text" placeholder="Código do aluno" required />
                    <input type="text" placeholder="Primeiro nome" required />
                    <input type="text" placeholder="Ultimo nome" required />
                    <input type="email" placeholder="Email" required />

                    <button type="button">Adicionar Aluno</button>
                </form>
            </Container>
        </>
    );
};

export default Students;
