import styled from "styled-components";
import curiculum from "picture/curiculum.svg";
import phone from "picture/phone.svg";
import enveloppe from "picture/envelope.svg";


export default function Contact() {
    return (
        <ContactTemplate>
        <p>Si vous souhaitez en savoir plus,
            merci de remplir le formulaire
            de contact. Mes coordonnées
            sont également mises
            à disposition.</p>

        <div className="icones">
            <img src={phone} alt="Tel"/>
            <img src={curiculum} alt="CV"/>
            <img src={enveloppe} alt="Enveloppe"/>

        </div>
        </ContactTemplate>
    );


}
const ContactTemplate = styled.div``;
