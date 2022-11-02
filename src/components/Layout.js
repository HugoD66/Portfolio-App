import GlobalStyle from "../style/GlobalStyle";
import styled, { ThemeProvider} from "styled-components";
import coloredTheme from '../style/themes/colored.json';
import darkTheme from '../style/themes/dark.json';
import React, {useState} from "react";
import Header from "./fixed/Header";
import Footer from "./fixed/Footer";

function Layout({ children }) {
    const [isColored, setIsColored] = useState(true);

    function handleToogleTheme() {
        setIsColored(!isColored);
    }
    return (
        <ThemeProvider theme={isColored ? darkTheme : coloredTheme}>
            <Wrapper>
                <GlobalStyle />
                <Header />
                    <Main>
                        { children }

                    </Main>
                <Footer isColored={isColored} handleToogleTheme={handleToogleTheme} />
            </Wrapper>
        </ThemeProvider>
    );
}
const Wrapper =styled.div`
`;
const Main = styled.div`
  min-height: calc(98vh);
`;
export default Layout;