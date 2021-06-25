import styled from 'styled-components';

export const Container = styled.div`
    padding: 64px 135px;
    display: flex;

    form {
        display: flex;
        flex-direction: column;
        padding: 40px;
        background-color: #fff;
        border: #dbd8d8 1px solid;

        p {
            font-size: 14px;
            margin-bottom: 14px;
            color: #ff0000;
        }

        input {
            background-color: #eeeeee;
            border: #c8c8c8 solid 1px;
            margin-bottom: 16px;
            padding: 8px 16px;
            border-radius: 4px;
        }

        button {
            background-color: #4c4fef;
            color: #ffffff;
            font-size: 14px;
            border: none;
            margin-top: 16px;
            border-radius: 6px;
            padding: 10px 30px;
        }
    }
`;

export const Content = styled.div`
    flex: 1;
`;

export const StudentCard = styled.div`
    display: flex;
    margin-bottom: 16px;
    background-color: #fff;
    width: 770px;
    border: #dbd8d8 1px solid;
    border-radius: 10px 0 0 10px;
    margin-right: 30px;
`;

export const StudentCardContent = styled.div`
    display: flex;
    padding: 12px 80px;
    flex: 1;

    h4 {
        margin-right: 56px;
    }
`;

export const DeleteStudentCard = styled.div`
    padding: 6px 18px;
    display: flex;
    align-items: center;
    background-color: #ff0000;
    justify-content: center;
    cursor: pointer;
    color: #ffffff;
`;
