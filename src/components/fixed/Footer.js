import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import styled from "styled-components";
import Facebook from "picture/footer/facebook.svg";
import Github from "picture/footer/github.svg";
import Discord from "picture/footer/discord.svg";
import Linkedin from "picture/footer/linkedin.svg";


export default function Footer ({ isColored, handleToogleTheme}){
    const [showFacebook, setShowFacebook] = useState(false);
    const [showGithub, setShowGithub] = useState(false);
    const [showDiscord, setShowDiscord] = useState(false);
    const [showLinkedin, setShowLinkedin] = useState(false);

    const handleCloseFacebook = () => setShowFacebook(false);
    const handleCloseGithub = () => setShowGithub(false);
    const handleCloseDiscord = () => setShowDiscord(false);
    const handleCloseLinkedin = () => setShowLinkedin(false);


    const handleShowFacebook = () => setShowFacebook(true);
    const handleShowGithub = () => setShowGithub(true);
    const handleShowDiscord = () => setShowDiscord(true);
    const handleShowLinkedin = () => setShowLinkedin(true);

    function handleSubmit(e) {
        e.preventDefault();
       alert('Texte copié !');
    }

    return (
        <Wrapper>
            <GaleriePhoto className="galerie-photo">

                <Im className="e-icon" src={Facebook} onClick={handleShowFacebook} />
                <Im className="e-icon" src={Github} onClick={handleShowGithub}  />
                <Im className="e-icon" src={Discord} onClick={handleShowDiscord}  />
                <Im className="e-icon" src={Linkedin} onClick={handleShowLinkedin}  />
            </GaleriePhoto>

            <Button  className="button-theme" variant="outlined" onClick={handleToogleTheme}> Thème { isColored ? "Sombre" : "Clair"}</Button>

            {/*Modal FB*/}
            <Modal className="modal" show={showFacebook} onHide={handleCloseFacebook}>
                <Modal.Body className="modal-body"><a href="https://www.facebook.com/hugo.dessauw">https://www.facebook.com/hugo.dessauw</a></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => navigator.clipboard.writeText("https://www.facebook.com/hugo.dessauw")}>
                        <p onClick={handleSubmit}> Copier
                        </p>
                    </Button>
                    <Button variant="primary" onClick={handleCloseFacebook}>
                    <p>Fermer</p>
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*Modal Git*/}
            <Modal className="modal" show={showGithub} onHide={handleCloseGithub}>
                <Modal.Body className="modal-body"><a href="https://github.com/HugoD66?tab=repositories">https://github.com/HugoD66?tab=repositories</a></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => navigator.clipboard.writeText("https://github.com/HugoD66?tab=repositories")}>
                        <p onClick={handleSubmit}> Copier
                        </p>
                    </Button>
                    <Button variant="primary" onClick={handleCloseGithub}>
                        <p>Fermer</p>
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*Modal Discord*/}
            <Modal className="modal" show={showDiscord} onHide={handleCloseDiscord}>
                <Modal.Body className="modal-body"><a href="https://discord.com/channels/@me">Enök#2857</a></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => navigator.clipboard.writeText("Enök#2857")}>
                        <p onClick={handleSubmit}> Copier
                        </p>
                    </Button>
                    <Button variant="primary" onClick={handleCloseDiscord}>
                        <p>Fermer</p>
                    </Button>
                </Modal.Footer>
            </Modal>
            {/*Modal Linkedin*/}
            <Modal className="modal" show={showLinkedin} onHide={handleCloseLinkedin}>
                <Modal.Body className="modal-body"><a href="https://www.linkedin.com/in/hugo-dessauw-07a901250/">https://www.linkedin.com/in/hugo-dessauw-07a901250/</a></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => navigator.clipboard.writeText("https://www.linkedin.com/in/hugo-dessauw-07a901250/")}>
                        <p onClick={handleSubmit}> Copier
                        </p>
                    </Button>
                    <Button variant="primary" onClick={handleCloseLinkedin}>
                        <p>Fermer</p>
                    </Button>
                </Modal.Footer>
            </Modal>
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
  margin-right: 2%;
  &:hover {
    transform: scale(1.2);
    transition: all 0.6s ease-in-out;
  }
`;