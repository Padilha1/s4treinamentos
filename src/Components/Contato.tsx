import { useState } from "react"
import "../Css/Contato.css"
import  {init, sendForm } from 'emailjs-com'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

init('EDrSPYNCo4TnSgAlx')

export const Contato = () => {
  
  const { register, handleSubmit, watch } = useForm();

  const [contactNumber, setContactNumber] = useState("000000");
  const message = watch('message')  || "";
  const messageCharsLeft = 1000 - message.length;
  const service = 'template_k8r5q5o'
    
  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }
  
  const onSubmit = (data:any) => {
    generateContactNumber();
    sendForm('default_service', `${service}`, '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });    
  }

  return (
    <section id='Contato' className='Contato'>
      <h2 className='contato-title'>Entre em contato conosco</h2>
      <p className="subtitle">Assim poderemos dar mais informações, faremos um orçamento personalizado para sua equipe.</p>
      <div className="Infos">
        <div className="contact-card">
          <div className="contact-info">
            <FontAwesomeIcon icon={faPhone} />
            <div className="span-box">
              <span> (42) 9 9154-2399 - Jorge </span> <br></br>
              <span> (42) 9 9957-4149 - Patrícia </span>
            </div>
          </div>
          <div className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} />
            <div className="span-box">
              <span> jorge@s4cursosetreinamentos.com.br </span> <br></br>
              <span> patricia@s4cursosetreinamentos.com.br </span>
            </div>
          </div>
        </div>

        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='contact_number' value={contactNumber} />
          <label>Nome Completo</label>
          <input type='text' {...register('user_name', { required: true })} placeholder='Nome' autoComplete="off"/>
          <br/>
          <label>Email</label>
          <input className="email" type='email' {...register('user_email', { required: true })} placeholder='Email' autoComplete="on"/>
          <br/>
          <label>Mensagem</label>
          <textarea {...register('message', { required: true })} placeholder='Escreva sua mensagem' autoComplete="off"/>
          <p className='message-chars-left '>{messageCharsLeft}</p>
          <br/>
          <input type='submit' value='Enviar' />
        </form>
      </div>
      
    
    
    </section>
  )
}
