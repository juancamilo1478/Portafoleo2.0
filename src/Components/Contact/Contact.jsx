
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import "./Contact.scss"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiReact, SiJavascript,  SiNodedotjs, SiSequelize,  } from "react-icons/si"
const Contact = () => {
    const [inputs,setInputs]=useState({
        user_name:'',
        user_email  :'',
        message:'',

    })
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        if(inputs.user_name!==''&&inputs.email!==''&&inputs.message!=='')
        {
        emailjs.sendForm('service_vjpm1sq', 'template_27eq2v7', form.current, 'lC4J8c2dGTFJVPi-e')
            .then(() => {
                toast.success('Mensaje enviado', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                setInputs({
                    user_name: '',
                    user_email: '',
                    message: '',
                })
            }, () => {
                toast.warn('Ocurrio un error', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
        }else{
            toast.warn('Faltan datos', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

const handlemessage=(event)=>{
const {name,value}=event.target
setInputs({
    ...inputs,
    [name]:value
})
}
    return (
        <div className="contact">
            <div className="contactContainer">
                <div className='contactDecoration'>
                    <div className='SkillsContainer'>
                        <div className='ladoa'><SiReact className='icoCub'/></div>
                        <div className='ladob'><SiJavascript className='icoCub' /></div>
                        <div className='ladoc'><SiNodedotjs className='icoCub' /></div>
                        <div className='ladod'><SiSequelize className='icoCub'/></div>
                    </div>
                </div>
                <div className='contactFomr'>
                    <form ref={form} onSubmit={sendEmail}>
                        <h1>Contactame</h1>
                        <div className='contactInput'>
                        <p>Nombre</p>
                            <input type="text" name="user_name" value={inputs.name} onChange={handlemessage} />
                        </div>
                        <div className='contactInput'>
                        <p>Email</p>
                            <input type="email" name="user_email"  value={inputs.email} onChange={handlemessage}/>
                        </div>
                        <div className='ContactMessage'>
                        <p>Mensaje</p>
                        <textarea name="message" value={inputs.message} onChange={handlemessage}/>
                        <input type="submit" value="Enviar" className='sendContact'/>
                        </div>
                    </form>      
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Contact;
