import React, { useEffect, useState } from 'react';

import { Form } from '@unform/web';

import { useRouteMatch } from 'react-router-dom';
import Input from '../../components/Input';

import Header from '../../components/Header';
import { api } from '../../services/Api';

import {
    Container,
    Content,
    StudentCard,
    StudentCardContent,
    DeleteStudentCard,
} from './styles';

interface StudentParams {
    class: string;
}

interface Clazz {
    _id: string;
    name: string;
    year: string;
}

interface Student {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    number: string;
    classId: string;
}

const Students: React.FC = () => {
    const [clazz, setClazz] = useState<Clazz>();
    const [students, setStudents] = useState<Student[]>([]);
    const [errorMessage, setErrorMessage] = useState('');
    const { params } = useRouteMatch<StudentParams>();

    const handleSubmit = async (data: any) => {
        setErrorMessage('');
        const sendData = Object.assign(data, { classId: params.class });
        await api
            .post('/student', sendData)
            .then(() => {
                setStudents([...students, sendData]);
            })
            .catch((err) => {
                if (err.response.data.message) {
                    setErrorMessage(err.response.data.message);
                } else {
                    setErrorMessage(
                        'Erro interno do servidor. Por favor, Tente mais tarde',
                    );
                }
            });
    };

    const fetchStudents = async () => {
        const response = await api.get<Student[]>('/student');
        const getStudents = response.data.filter(
            (studt) => studt.classId === params.class,
        );
        setStudents(getStudents);
    };

    const fetchClasses = async () => {
        const response = await api.get<Clazz[]>('/class');
        const currentClass = response.data.find(
            (element) => element._id === params.class,
        );
        setClazz(currentClass);
    };

    const handleDeleteStudent = async (id: string) => {
        try {
            await api.delete(`/student/${id}`);
            setStudents(students.filter((std) => std._id !== id));
        } catch (error) {
            alert('Erro ao remover aluno');
        }
    };

    useEffect(() => {
        fetchClasses();
        fetchStudents();
    }, []);

    return (
        <>
            <Header>Alunos {clazz?.name}</Header>
            <Container>
                <Content>
                    {students.length ? (
                        students.map((selected) => (
                            <StudentCard key={selected._id}>
                                <StudentCardContent>
                                    <h4>{selected.number}</h4>
                                    <h4>
                                        {selected.firstName} {selected.lastName}
                                    </h4>
                                    <h4>{selected.email}</h4>
                                </StudentCardContent>
                                <DeleteStudentCard
                                    onClick={() =>
                                        handleDeleteStudent(selected._id)
                                    }
                                >
                                    <h4>Del</h4>
                                </DeleteStudentCard>
                            </StudentCard>
                        ))
                    ) : (
                        <h1>Nenhum Aluno registrado</h1>
                    )}
                </Content>
                <Form onSubmit={handleSubmit}>
                    {errorMessage && <p>{errorMessage}</p>}
                    <Input
                        min={0}
                        max={999999}
                        name="number"
                        type="number"
                        placeholder="Código do aluno"
                        required
                    />
                    <Input
                        name="firstName"
                        type="text"
                        placeholder="Primeiro nome"
                        required
                    />
                    <Input
                        name="lastName"
                        type="text"
                        placeholder="Ultimo nome"
                        required
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        required
                    />

                    <button type="submit">Adicionar Aluno</button>
                </Form>
            </Container>
        </>
    );
};

export default Students;
