import styled from "styled-components";
import Facebook from "picture/footer/facebook.svg";
import Github from "picture/footer/github.svg";
import Discord from "picture/footer/discord.svg";
import Linkedin from "picture/footer/linkedin.svg";


export default function Footer ({ isColored, handleToogleTheme}){
    return (
        <Wrapper>
            <GaleriePhoto className="galerie-photo">

                <Im className="e-icon" src={Facebook} />
                <Im className="e-icon" src={Github} />
                <Im className="e-icon" src={Discord} />
                <Im className="e-icon" src={Linkedin} />
            </GaleriePhoto>

            <Button variant="outlined" onClick={handleToogleTheme}> Thème { isColored ? "Sombre" : "Clair"}</Button>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
  backdrop-filter: blur(8px);
  position:sticky; /* fixation du footer */
  height:80px;
  bottom:0;
  border-top: 1px solid black;
  box-shadow: 0px -3px 14px 2px  ${(props) => props.theme.boxShadow};
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const GaleriePhoto= styled.div`
  width: 50%;
`;
const Im = styled.img`
  width: 15%;
  height: 15%;
  margin: 4%;
  -webkit-filter: blur(0);
  filter: blur(0);
  &:hover {
    -webkit-filter: blur(3px);
    filter: blur(3px);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
  }
`;
const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  -moz-appearance: none;
  -webkit-appearance: none;
  text-decoration: none;
  color: inherit;
  font-family:  ${(props) => props.theme.fontTheme};
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 6px 8px;
`;