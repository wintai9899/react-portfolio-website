import React, {useRef} from 'react'
import "./contact.css"
import {AiOutlineMail} from "react-icons/ai"
import {SiMinutemailer} from "react-icons/si"
import {AiFillPhone} from "react-icons/ai"
import emailjs from '@emailjs/browser'



const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vwr519j', 'template_pwmutsy', form.current, 'eihzP-RSWLvgbAcky')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <AiOutlineMail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>wintai9899@gmail.com</h5>
            <a href="mailto:wintai9899@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
          <SiMinutemailer className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+44 7943045246</h5>
            <a href="https://api.whatsapp.com/send?phone=447943045246" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
          <AiFillPhone className="contact_option-icon"/>
            <h4>Phone</h4>
            <h5>+44 7943045246</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name Please" required></input>
          <input type="email" name="email" placeholder="Your Email Please" required></input>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact