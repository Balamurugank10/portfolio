import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v01nm2q', 'template_anqixjn', form.current, {
        publicKey: 'azu7MiTcFyoqNVq5R',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className='contact'>
      <div className='contact-header'>
        <h1>Contact</h1>
        <h3>Feel free to reach out to me for any questions or opportunities!</h3>
      </div>
      <div className='forms'>
        <h3>Email</h3>
        <form ref={form} onSubmit={sendEmail} className='form-control-card'>
          <input type='email' name='user-email' className='receiver-email' placeholder='Your Email' required />
          <input type='text' name='user-name' className='receiver-name' placeholder='Your Name' required />
          <input type='text' name='subject' className='subject' placeholder='Subject' required />
          <textarea name='message' cols='30' rows='5' className='message' placeholder='Message' required />
          <button type='submit' className='send-email'>Send</button>
        </form>
      </div>
      <div className='contact-footer'>
        <div className='icons'>
          <h3>Feel free to connect with me</h3>
          <div className='icons-row'> {/* Changed from name to className */}
            <a href='https://www.linkedin.com/in/balamurugan-kaliyaperumal-1215932a7/' target='_blank' rel='noopener noreferrer'>
              <i className="fab fa-linkedin" style={{ fontSize: '30px', color: 'white' }}></i>
            </a>
            <a href="https://github.com/Balamurugank10" target="_blank" rel="noopener noreferrer">
              <i className='fab fa-github' style={{ fontSize: '30px', color: 'white' }}></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
