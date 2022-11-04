import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_6xgdp3w', form.current, 'kcOerT81WUFUxPhWU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        // <div className="container">
        <form id="contact" ref={form} onSubmit={sendEmail}>
            <h2>Let's get in touch!</h2>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <div id="send">
                <input type="submit" value="Send" />
            </div>
        </form >
        // </div>
    );
};

export default Contact