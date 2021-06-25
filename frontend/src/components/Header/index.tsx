import React from 'react';

import { Container } from './styles';

interface HeaderProps {
    buttonText: string;
}

const Header: React.FC<HeaderProps> = ({ children, buttonText }) => {
    return (
        <Container>
            <h1>{children}</h1>
            <button type="button">{buttonText}</button>
        </Container>
    );
};

export default Header;
