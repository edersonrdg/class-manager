import styled from 'styled-components';

export const Container = styled.div`
    padding: 64px 135px;
    display: flex;
    justify-content: space-between;

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
    margin-right: 30px;
`;

export const ClassCard = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    border: #dbd8d8 1px solid;
    margin-bottom: 24px;
`;

export const CardContentContainer = styled.div`
    display: flex;
    justify-content: space-space-between;
    margin: 12px 32px;
    flex: 1;
    font-size: 14px;

    h4 {
        margin-right: 40px;
    }
`;

export const StudentContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 60px;
    background-color: #98cde0;
    cursor: pointer;
    color: #ffffff;
`;

export const DeleteClassContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 18px;
    color: #ffffff;
    background-color: #ff0000;
    cursor: pointer;
`;
