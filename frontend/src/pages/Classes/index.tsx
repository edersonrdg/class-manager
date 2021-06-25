import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import { api } from '../../services/Api';

import {
    Container,
    Content,
    ClassCard,
    CardContentContainer,
    StudentContainer,
    DeleteClassContainer,
} from './styles';

interface Clazz {
    _id: string;
    name: string;
    year: string;
}

const Classes: React.FC = () => {
    const [classes, setClasses] = useState<Clazz[]>([]);

    const fetchClasses = async () => {
        const response = await api.get('/class');
        setClasses(response.data);
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    return (
        <>
            <Header>Gestão de turmas</Header>
            <Container>
                <Content>
                    {classes.length ? (
                        classes.map((element) => (
                            <ClassCard key={element._id}>
                                <CardContentContainer>
                                    <h4>{element.name}</h4>
                                    <h4>20{element.year}</h4>
                                </CardContentContainer>
                                <Link to={`${element._id}/students`}>
                                    <StudentContainer>
                                        <h4>Alunos</h4>
                                    </StudentContainer>
                                </Link>
                                <DeleteClassContainer>
                                    <h4>DEl</h4>
                                </DeleteClassContainer>
                            </ClassCard>
                        ))
                    ) : (
                        <h2>Nenhuma turma cadastrada</h2>
                    )}
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
