
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./Contact.scss"
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact">
            <div className="contactContainer">
              
                <div className='contactDecoration'>

                </div>
                <div className='contactFomr'>
                    <form ref={form} onSubmit={sendEmail}>
                        <h1>Contactame</h1>
                        <div className='contactInput'>
                        <p>Nombre</p>
                        <input type="text" name="user_name" />
                        </div>
                        <div className='contactInput'>
                        <p>Email</p>
                        <input type="email" name="user_email" />
                        </div>
                        <div className='ContactMessage'>
                        <p>Mensaje</p>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
