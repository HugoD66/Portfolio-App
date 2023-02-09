import React, { useState } from 'react';
import { send } from "emailjs-com";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import {useForm} from "react-hook-form";

const ContactForm3 = () => {


    const [toSend, setToSend] = useState({
        from_name: "",
        reply_to: "",
        message: "",
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            "mmferrzpjyssxotv",
            "template_7szl2jt",
            toSend,
            "E7zb7VnzX3j0W5vgC"
        ).then(
            (response) => {
                console.log("SUCCESS!", response.status, response.text);
            },
            (err) => {
                console.log("FAILED...", err);
            }
        );
    };

    return (
        <ContactFormTemplate>
            <TitreForm>Me contacter</TitreForm>
            <form onSubmit={handleSubmit}>
                <Champs>
                <Form.Group>
                    <Form.Label htmlFor="input-name">Nom</Form.Label>
                    <Form.Control
                        type="text"
                        name="from_name"
                        id="input-name"
                        placeholder="Jean Dupont"
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="input-email">Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="reply_to"
                        id="input-email"
                        placeholder="jean.dupont@gmail.com"
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="input-message">Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        name="message"
                        id="input-message"
                        value={toSend.message}
                        onChange={handleChange}
                    />
                </Form.Group>
                </Champs>
                <Button type="submit">Envoyer</Button>


            </form>
        </ContactFormTemplate>

    );
};

export default ContactForm3;


const Champs= styled.div`
  @media (max-width: 1500px) {
    width: 100%;
  }
  @media (min-width: 1500px) {
    width: 100%;
  }`;
const ContactFormTemplate = styled.div`
  @media (max-width: 1500px) {
    width: 70%;
  }
  @media (min-width: 1500px) {
    width: 50%;
  }
  form{
    border: 2px solid ${(props) => props.theme.backSession};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10% auto;
    padding: 5%;
    margin-bottom: 20%;
    @media (min-width: 1500px) {
      width: 80%;
    }
    label {
      margin-top: 2%;
      font-size: 18px;
      font-family: ${(props) => props.theme.fontTheme};
      @media (min-width: 1500px) {
        font-size: 1.5em;
      }
    }
    input , textarea {
      margin-top: 5%;
      margin-bottom: 5%;
      border-radius: 10px;
      width: 100%;
      transition: all 0.6s ease-in-out;
      border: 1px solid ${(props) => props.theme.buttonClicked};
      @media (min-width: 1500px) {
        font-size: 1.3em;
      }
      &:hover {
        transform: scale(1.1);
        transition: all 0.6s ease-in-out;
        border: none;
      }
    }
  }
  .textarea {
    height: 80px;
    border-radius: 10px;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
  .buttonPosition {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const Button= styled.button`
    width: 150px;
    margin: auto;
    height: 45px;
    border-radius: 15px;
    font-family: ${(props) => props.theme.titleFont};
    background-color: ${(props) => props.theme.backSession};
    border: 1px solid ${(props) => props.theme.mainColor};
    font-family: ${(props) => props.theme.fontTheme};
    color: ${(props) => props.theme.mainColor};
`;

const TitreForm=styled.h2`
  font-size: 40px;
  text-align: center;
  text-decoration: underline 3px solid ${(props) => props.theme.backSession};
  font-family: ${(props) => props.theme.titleFont};
  @media (min-width: 1500px) {
    font-size: 80px;
  }
`;