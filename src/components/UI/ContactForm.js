import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { send } from 'emailjs-com';
import styled from "styled-components";

function ContactForm() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'dessauw.hugo66@gmail.com',
        message: '',
        reply_to: '',
    });
    const onSubmit = (e) => {
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
        <ContactFormTemplate>
            <TitreForm>Me contacter</TitreForm>

            <Form onSubmit={onSubmit}>
                <Champs>
                    <Name>
                        <label htmlFor="input-name">Votre nom :</label>
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
                        <label htmlFor="input-mail">Votre E-mail :</label>
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
                        <label htmlFor="input-desc">Votre message :</label>
                        <input
                            type='text'
                            name='message'
                            placeholder='...'
                            onChange={handleChange}
                            id="input-desc"
                        />
                    </Desc>

                    <ButtonTemplate type='submit'>Submit</ButtonTemplate>
                </Champs>
            </Form>
        </ContactFormTemplate>

    );
}
const ContactFormTemplate= styled.div`
       
    form{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10% auto;
    label { 
      
        
    }
    input {
        margin-top: 5%;
        margin-bottom: 5%;
        width: 100%;
        border-radius: 90px;
        border: 2px solid ${(props) => props.theme.buttonClicked};
          transition: all 0.6s ease-in-out;
    
          &:hover {
            border: 2px solid ${(props) => props.theme.buttonClicked};
            transform: scale(1.1);
            transition: all 0.6s ease-in-out;
            color: ${(props) => props.theme.buttonClicked};
          }
       }
    }
`;
const Champs= styled.div``;

const Name= styled.div``;
const Desc= styled.div``;
const Email= styled.div``;
const ButtonTemplate= styled.button``;
const TitreForm=styled.h2`
  font-size: 40px;
  text-align: center;
  text-decoration: underline 3px solid ${(props) => props.theme.backSession};
  font-family: ${(props) => props.theme.titleFont};
`;
export default ContactForm;