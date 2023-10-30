import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,300;1,400;1,700&family=Poppins:wght@300;400;500;600;700&display=swap');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.secondaryColor};
    }
`

export default GlobalStyles
