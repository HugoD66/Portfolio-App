import React from 'react';
import {send} from "emailjs-com";


export default function ContactForm2 ()  {

    const toSend = {
        from_name: '',
        to_name: 'dessauw.hugo66@gmail.com',
        message: '',
        reply_to: '',
    };

    const onSubmitMail = (e) => {
        e.preventDefault();
        send(
            'mmferrzpjyssxotv', // User ID
            'template_7szl2jt', // Template ID
            toSend,
            'E7zb7VnzX3j0W5vgC' // Service ID
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };


    return (
        <>

            <form onSubmit={onSubmitMail}>
                <label htmlFor="input-name">Votre nom</label>
                <input
                    type='text'
                    name='from_name'
                    placeholder='Jean Dupont'
                    value={toSend.from_name}
                    id="input-name"
                />

                <label htmlFor="input-mail">Votre E-mail</label>
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Exemple@gmail.com'
                    value={toSend.reply_to}
                    id="input-mail"
                />
                <label htmlFor="input-desc">Votre message</label>
                <textarea
                    className="textarea"
                    name='message'
                    placeholder='...'
                    id="input-desc"
                />

                <button type='submit'>Envoyer</button>
            </form>
        </>
    );
}