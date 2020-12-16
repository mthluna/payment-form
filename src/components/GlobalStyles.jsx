import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F7F7F7;
    }

    @font-face {
        font-family: 'SF Pro Text';
        src: url('/fonts/SF-Pro-Text-Regular.otf');
    }
`;

export default GlobalStyles;
