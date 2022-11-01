import React, {useState} from 'react';
import styled from "styled-components";
import {send} from "emailjs-com";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";


export default function ContactFormTest ()  {


    const { handleSubmit, formState } = useForm();
    const { isSubmitting } = formState;
    function onSubmit(data) {
        // return promise that resolves after 2 seconds
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }


    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'dessauw.hugo66@gmail.com',
        message: '',
        reply_to: '',
    });
    const onSubmitMail = (e) => {
        e.preventDefault();
        send(
            'mmferrzpjyssxotv',
            'TEMPLATE ID',
            toSend,
            'E7zb7VnzX3j0W5vgC'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };



    return (
        <ContactFormTestTemplate>
                <TitreForm>Me contacter</TitreForm>
                <Form onSubmit={handleSubmit(onSubmit, onSubmitMail)}>
                    <Champs>
                        <Name>
                            <label htmlFor="input-name">Votre nom</label>
                            <input
                                type='text'
                                name='from_name'
                                placeholder='Jean Dupont'
                                value={toSend.from_name}
                                onChange={handleChange}
                                id="input-name"
                            />
                        </Name>
                        <Email>
                            <label htmlFor="input-mail">Votre E-mail</label>
                            <input
                                type='text'
                                name='reply_to'
                                placeholder='Exemple@gmail.com'
                                value={toSend.reply_to}
                                onChange={handleChange}
                                id="input-mail"
                            />
                        </Email>
                        <Desc>
                            <label htmlFor="input-desc">Votre message</label>
                            <textarea
                                className="textarea"
                                type='text'
                                name='message'
                                placeholder='...'
                                onChange={handleChange}
                                id="input-desc"
                            />
                        </Desc>
                        <div className="buttonPosition">
                            <ButtonTemplate id="labelButton" disabled={isSubmitting} type='submit'>
                                {isSubmitting &&
                                    <span className="spinner-border spinner-border-sm mr-1">

                                    </span>
                                }
                                    Envoyer
                            </ButtonTemplate>
                        </div>
                    </Champs>
                </Form>
        </ContactFormTestTemplate>
    );
}
const ContactFormTestTemplate = styled.div`
    form{
      border: 2px solid ${(props) => props.theme.backSession};
      border-radius: 20px;
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10% auto;
      padding: 5%;
      margin-bottom: 20%;
    label {
      margin-top: 2%;
      font-size: 18px;
      font-family: ${(props) => props.theme.fontTheme}
    }
    input , textarea {
        margin-top: 5%;
        margin-bottom: 5%;
        border-radius: 10px;
        width: 100%;
        transition: all 0.6s ease-in-out;
        border: 1px solid ${(props) => props.theme.buttonClicked};
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
`;
const Champs= styled.div``;
const Name= styled.div``;
const Desc= styled.div``;
const Email= styled.div``;
const ButtonTemplate= styled.button`
    width: 110px;
    height: 45px;
    border-radius: 15px;
    font-family: ${(props) => props.theme.titleFont};
    background-color: ${(props) => props.theme.backSession};
    border: 1px solid ${(props) => props.theme.mainColor};
    font-family: ${(props) => props.theme.fontTheme};
    color: ${(props) => props.theme.mainColor};
    transition: all 0.6s ease-in-out;
      &:hover {
        transform: scale(1.1);
        transition: all 0.6s ease-in-out;
        border: 1px solid ${(props) => props.theme.mainColor};
      }
`;
const TitreForm=styled.h2`
  font-size: 40px;
  text-align: center;
  text-decoration: underline 3px solid ${(props) => props.theme.backSession};
  font-family: ${(props) => props.theme.titleFont};
`;




