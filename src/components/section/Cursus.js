import styled from "styled-components";
import Accordion from 'react-bootstrap/Accordion';
import AccordPic from 'picture/accordeon/argent.png';
import RestauPic from 'picture/accordeon/restau.png';
import ArtisanatPic from 'picture/accordeon/artisanat.png';
import TheatrePic from 'picture/accordeon/theatre.png';

export default function Cursus() {
    return (
        <CursusTemplate>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <img src={RestauPic} alt="Accordeon picture 1"/>
                        <TitleAccord>
                            Restauration
                        </TitleAccord>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            J'ai travaillé comme plongeur durant une saison.
                        Après une bonne entente et une dynamique positive, l'équipe m'a gardé dans ses rangs afin d'affiner mes
                        compétences en cuisine. <br/> J'ai également appris l'art
                        de la pizza en intégrant, en parallèle, l'équipe de cuisiniers dans sa pizzeria.
                        </p>
                        <ul>
                            <li> •Cuisinier/Pâtissier, Le Jardin, Torreilles</li>
                            <li> •Pizzaïolo, Pizza Romane, Torreilles</li>
                            <li> •Plongeur, Le Jardin, Torreilles</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <img src={ArtisanatPic} alt="Accordeon picture 2"/>
                        <TitleAccord>
                            Artisanat
                        </TitleAccord>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Au début de ma vie professionnelle, j'ai travaillé dans le bâtiment. Avec un BAC Sciences Techniques de l'Ingénieur
                            Génie-Civil en poche, je suis parti à Montpellier pour rejoindre l'équipe de l'entreprise Fondeville. De retour à
                            Perpignan, j'ai été recruté par diverses entreprise d'artisanat :
                        </p>
                        <ul>
                            <li> •Ouvrier, Fondeville, Montpellier</li>
                            <li> •Intérimaire, Randstad, Perpignan</li>
                            <li> •Menuiserie PVC, BTB, St Estève</li>
                            <li> •Créateur d'Enseigne, Alinéa, Le Soler</li>
                            <li> •Artisanat/Rénovation, Les Nouveaux Habitats, Perpignan</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <img src={TheatrePic} alt="Accordeon picture 3"/>
                        <TitleAccord>
                            Technique
                        </TitleAccord>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            Tout au long de ma vie active, j'ai travaillé comme intermittent, j'ai donc eu la chance de découvrir le monde
                            de la culture, et de participer à la création de divers spectacles. J'ai également été plongé dans le milieu festivalier
                            grâce à VISA pour l'image !
                            <ul>
                                <li> •Technicien plateau, Théâtre de l'étang, St Estève</li>
                                <li> •Technicien plateau, Théâtre municipal, Perpignan</li>
                                <li> •Régisseur, VISA pour l'image, Perpignan</li>
                            </ul>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <img src={AccordPic} alt="Accordeon picture 4"/>
                        <TitleAccord>
                            Divers
                        </TitleAccord>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>J'ai, pour finir, travaillé dans différents domaines:</p>
                        <ul>
                            <li> •Vendanges, Mas Baux, Canet en Roussillon</li>
                            <li> •Infirmier, 4 stages dans divers milieux</li>
                            <li> •Prospection prix du marché, St Charles, Perpignan</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </CursusTemplate>
    );


}
const CursusTemplate = styled.div`
  width: 90%;
  margin: 5% auto;
  @media (min-width: 1500px) {
    width: 80%;
  }
  .accordion-button {
    box-shadow: 0px 0px 22px -1px rgba(0, 0, 0, 0.53);
    height: 5em;
    z-index: 0;
    @media (min-width: 1500px) {
      font-size: 1.5em;
    }
  }

  .accordion-button:focus {
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonClicked};
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: all 0.3s ease-in-out;
    }

  }

  .accordion-button:not(.collapsed) {
    color: #212529;
  }

  p {
    width: 90%;
    text-align: justify;
    margin: 3% auto;
    line-height: 1.15;
    font-family: ${(props) => props.theme.fontTheme};
    @media (min-width: 1500px) {
      font-size: 1.3em;
    }
  }

  img {
    width: 2em;
    @media (min-width: 1500px) {
      width: 3em;
    }
  }

  ul {
    background-color: rgba(235, 235, 231, 0.8);
    width: 80%;
    text-align: start;
    margin: 4% auto;
    line-height: 1.40;
    font-family: ${(props) => props.theme.fontTheme};
    @media (min-width: 1500px) {
      width: 60%;
    }
    li {
      font-size: 1.1em;
      font-family: "Calibri Light", sans-serif;
    }
    @media (min-width: 1500px) {
      font-size: 1.2em;
    }
  }
`;
const TitleAccord = styled.div`
  font-size: 1.3em;
  text-shadow: 0 0 2px #e5f2f1;
  margin-left: 2em;
  font-family: ${(props) => props.theme.titleFont};

`;