import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import {forwardRef, useImperativeHandle, useRef, useState} from "react";
import button from "bootstrap/js/src/button";
//Hynos
import HypnosScreen from "picture/carousel/hypnos.png";
import HypnosLogo from "picture/modal/Portfolio/Logo/logo-hypnos-withoutBack.png"
//Dantabase
import DantabaseScreen from "picture/carousel/dantabase.png";
import DanatabseLogo from "picture/modal/Portfolio/Logo/logo-dantabase-withoutBack.png.png"
//Ecoit
import EcoitScreen from "picture/carousel/ecoit.png";
import EcoitLogo from "picture/modal/Portfolio/Logo/logo-ecoit-withoutBack.png.png"
//Drum
import DrumScreen from "picture/carousel/drum.png";
import DrumLogo from "picture/modal/Portfolio/Logo/logo-drum-widthoutBack.png"
//ClipBoard
import ClipScreen from "picture/carousel/clipboard.png";
import ClipLogo from "picture/modal/Portfolio/Logo/logo-clip-withoutBack.png"

export default function LienApps () {

    const modalHypnos = useRef();
    const modalDantabase = useRef();
    const modalEcoit = useRef();
    const modalMusic = useRef();
    const modalClip = useRef();

    const Modal = forwardRef((props, ref) => {
        const [open, setOpen] = useState(false);

        useImperativeHandle(
            ref,
            () => {
                return {
                open: () => setOpen(true),
                close: () => setOpen(false)
                }
            })
        
        return (
                <AnimatePresence>
                    {open && <motion.div
                        initial={{
                            opacity:0
                        }}
                        animate={{
                            opacity:1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: {
                                duration: 0.4
                            }
                        }}
                        onClick={() => setOpen(false)}
                        className="modal-backdrop">
                        <motion.div
                            initial={{
                                scale: 0
                            }}
                            animate={{
                                scale: 1,
                                transition: {
                                    duration: 0.5
                                }
                            }}
                            exit={{
                                scale: 0,
                                transition: {
                                    delay: 0.3
                                }
                            }}
                            className="modal-content-wrapper">
                            <motion.div
                                className="modal-content"
                                initial={{
                                    x: 80,
                                    opacity: 0
                                }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.3,
                                        duration: 1
                                    }
                                }}
                                exit={{
                                    x: 100,
                                    opacity: 0,
                                    transition: {
                                        duration: 0.3
                                    }
                                }}
                            >
                                {props.children}
                            </motion.div>
                        </motion.div>
                    </motion.div>}
                </AnimatePresence>
        );
    })
    function accesAppHypnos(){
        window.location.href="https://hypnos-hotel-app.herokuapp.com/";
    }
    function accesAppDantabase(){
        window.location.href="https://dantabase.herokuapp.com/";
    }
    function accesAppEcoit(){
        window.location.href="https://stormy-sea-52478.herokuapp.com/";
    }
    function accesAppDrum(){
        window.location.href="https://appli-musicale.herokuapp.com/";
    }
    function accesAppClip(){
        window.location.href="https://github.com/HugoD66/Projet-Clipboard-Hugo-DESSAUW";
    }
    return (
        <div>
        <ListeAppli>
{/* Modal Hypnos */}
                <BouttonAppli onClick={() => modalHypnos.current.open()}>
                    <img src={HypnosLogo} alt="Bouton Hypnos"/>
                    <p>Hypnos</p>
                </BouttonAppli>
{/* Modal Dantabase */}
                <BouttonAppli onClick={() => modalDantabase.current.open()}>
                    <img src={DanatabseLogo} alt="Bouton Dantabse"/>
                    <p>Dantabase</p>
                </BouttonAppli>
{/* Modal Ecoit */}
                <BouttonAppli onClick={() => modalEcoit.current.open()}>
                    <img src={EcoitLogo} alt="Bouton Ecoit"/>
                    <p>Ecoit</p>
                </BouttonAppli>
{/* Modal Appli musicale */}
                <BouttonAppli onClick={() => modalMusic.current.open()}>
                    <img src={DrumLogo} alt="Bouton Drum"/>
                    <p>Musique</p>
                </BouttonAppli>
{/* Modal Clipboard Maquette */}
                <BouttonAppli onClick={() => modalClip.current.open()}>
                    <img src={ClipLogo} alt="Bouton Clipboard"/>
                    <p>Clipboard</p>
                </BouttonAppli>
        </ListeAppli>

        <ModalCustom>
{/* Modal Hypnos */}
                <Modal ref={modalHypnos}>
                    <ModalTitleAndLogo>
                        <h1>Hypnos</h1>
                        <img src={HypnosLogo} alt="Logo Clipboard Modal"/>
                    </ModalTitleAndLogo>
                    <ModalScreenAndDescript>
                        <img src={HypnosScreen} alt="Logo Clipboard Modal"/>
                        <p>
                            Site Hotelier
                        </p>
                    </ModalScreenAndDescript>
                    <ModalButtons type="button" onClick={accesAppHypnos}>
                        Lien Application
                    </ModalButtons>
                </Modal>
{/* Modal Dantabase */}
                <Modal ref={modalDantabase}>
                    <ModalTitleAndLogo>
                        <h1>Dantabase</h1>
                        <img src={DanatabseLogo} alt="Logo Clipboard Modal"/>
                    </ModalTitleAndLogo>
                     <ModalScreenAndDescript>
                        <img src={DantabaseScreen} alt="Logo Clipboard Modal"/>
                        <p>
                            API Gestion de franchise d'une salle de sport
                        </p>
                    </ModalScreenAndDescript>
                    <ModalButtons type="button" onClick={accesAppDantabase}>
                        Lien Application
                    </ModalButtons>
                </Modal>
{/* Modal Ecoit */}
                <Modal ref={modalEcoit}>
                    <ModalTitleAndLogo>
                        <h1>Eco-It</h1>
                        <img src={EcoitLogo} alt="Logo Clipboard Modal"/>
                    </ModalTitleAndLogo>
                    <ModalScreenAndDescript>
                        <img src={EcoitScreen} alt="Logo Clipboard Modal"/>
                        <p>
                            Plateforme éducative sur l'impact digital sur l'écologie.
                        </p>
                    </ModalScreenAndDescript>
                    <ModalButtons type="button" onClick={accesAppEcoit}>
                        Lien Application
                    </ModalButtons>
                </Modal>
{/* Modal Appli musicale */}
                <Modal ref={modalMusic}>
                    <ModalTitleAndLogo>
                        <h1>Application Musicale</h1>
                        <img src={DrumLogo} alt="Logo Clipboard Modal"/>
                    </ModalTitleAndLogo>
                    <ModalScreenAndDescript>
                        <img src={DrumScreen} alt="Logo Clipboard Modal"/>
                        <p>
                            Projet d'application musicale en ligne.
                        </p>
                    </ModalScreenAndDescript>
                    <ModalButtons type="button" onClick={accesAppDrum}>
                            Lien Application
                    </ModalButtons>
                </Modal>
{/* Modal Clipboard */}
                <Modal ref={modalClip}>
                    <ModalTitleAndLogo>
                        <h1>Clipboard</h1>
                        <img src={ClipLogo} alt="Logo Clipboard Modal"/>
                    </ModalTitleAndLogo>
                    <ModalScreenAndDescript>
                        <img src={ClipScreen} alt="Logo Clipboard Modal"/>
                        <p>
                            Réalisation d'un projet de maquettage d'application.
                        </p>
                    </ModalScreenAndDescript>
                    <ModalButtons type="button" onClick={accesAppClip}>
                        Lien Projet
                    </ModalButtons>
                </Modal>
            </ModalCustom>
        </div>
    );
}

const ListeAppli = styled.div `
  display: flex;
  align-items: start;
  justify-content: space-around;
  margin: auto;
  width: 96%;
  flex-direction: column;
  font-family: ${(props) => props.theme.titleFont};
  img {
    border : 1px solid ${(props) => props.theme.buttonClicked};
    border-radius: 90%;
    min-width:  3.2em;;
    width: 3.2em;
    height: 3.2em;
    padding: 4px;
    margin: 13px;
    -o-transition: background-color 0.4s ease-out;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    &:hover{
      transform: scale(1.2);
      transition: all 0.5s ease-in-out;
      background-color: ${(props) => props.theme.backSession};
    }
  }
`;
const BouttonAppli = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
`;
const Button = styled.button`
    width: 80px;
    margin: 20% auto;
`;
const ModalCustom = styled.div`
`;

const ModalTitleAndLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  h1 {
    color: #343434;
    font-size: 1.4em;
    font-family: ${(props) => props.theme.fontTheme};
    text-decoration: underline 1px solid rgba(5, 13, 11, 0.82);
  }
  h2 {
    color: black;
  }
  img {
    max-width: 20%;
    margin-left: 50%;
  }
`;
const ModalScreenAndDescript = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 15% auto;
  img {
    max-width: 63%;
    box-shadow: 0px 0px 7px -2px #000000;
  }
  p {
    margin-left: 10%;
    color: black;
    text-align: start;
    line-height: 1.2em;
    font-family: 'Roboto Slab', serif;
  }
`;
const ModalButtons = styled.button`
  height: 1.6em;
  border-radius: 15px;
  font-family: ${(props) => props.theme.fontTheme};
  letter-spacing: 0.03em;
  padding: 6px 8px;
  text-shadow: 0 0 2px #e5f2f1;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.theme.backSession};
  color: Black;
  
  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;
