import React, { useEffect, useState } from 'react';

import { useRouteMatch } from 'react-router-dom';
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
    const { params } = useRouteMatch<StudentParams>();

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

    useEffect(() => {
        fetchClasses();
        fetchStudents();
    }, []);

    return (
        <>
            <Header>Alunos {clazz?.name}</Header>
            <Container>
                <Content>
                    {students.map((selected) => (
                        <StudentCard key={selected._id}>
                            <StudentCardContent>
                                <h4>{selected.number}</h4>
                                <h4>
                                    {selected.firstName} {selected.lastName}
                                </h4>
                                <h4>{selected.email}</h4>
                            </StudentCardContent>
                            <DeleteStudentCard>
                                <h4>Del</h4>
                            </DeleteStudentCard>
                        </StudentCard>
                    ))}
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
