import React, { useState, useEffect } from 'react';
import { Form } from '@unform/web';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Input from '../../components/Input';
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

interface FormData {
    name: string;
    year: string;
}

const Classes: React.FC = () => {
    const [classes, setClasses] = useState<Clazz[]>([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (data: FormData) => {
        setErrorMessage('');
        const formatYear = data.year.substr(2, 2);
        const res = await api
            .post('/class', {
                name: data.name,
                year: formatYear,
            })
            .then((response) => {
                setClasses([...classes, response.data]);
            })
            .catch((err) => {
                setErrorMessage('Já existe uma turma com esse nome');
            });
    };

    const handleDeleteClass = async (id: string) => {
        try {
            await api.delete(`/class/${id}`);
            setClasses(classes.filter((clazz) => clazz._id !== id));
        } catch (error) {
            alert('Erro ao deletar turma');
        }
    };

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
                                <DeleteClassContainer
                                    onClick={() =>
                                        handleDeleteClass(element._id)
                                    }
                                >
                                    <h4>DEl</h4>
                                </DeleteClassContainer>
                            </ClassCard>
                        ))
                    ) : (
                        <h2>Nenhuma turma cadastrada</h2>
                    )}
                </Content>
                <Form onSubmit={handleSubmit}>
                    {errorMessage && <p>{errorMessage}</p>}
                    <Input
                        name="name"
                        type="text"
                        placeholder=" Nome da Turma"
                        required
                    />
                    <Input name="year" type="date" placeholder="ano" required />
                    <button type="submit">Adicionar Turma</button>
                </Form>
            </Container>
        </>
    );
};

export default Classes;
