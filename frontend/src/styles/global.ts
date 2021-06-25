import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: #EAEFF3;
    }
    body, input, button {
        font-family: 'Roboto', sans-serif;
        color: #4A4B64;
        font-size: 16px;
    }
    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`;
