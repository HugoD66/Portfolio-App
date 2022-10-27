import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

    body {
      transition: linear 0.5s;
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.mainColor};
      font-family: 'Mukta', sans-serif;
    }
    
`;
export default GlobalStyle;