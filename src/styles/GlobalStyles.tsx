import { createGlobalStyle } from 'styled-components';
import 'normalize.css/normalize.css';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondaryColor};
    }
`;

export default GlobalStyles;
