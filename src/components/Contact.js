import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { send, sendHover } from '../assets'; // Assurez-vous que ces images existent bien dans votre projet

export const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_86xy56d',
        'template_2i450vq',
        {
          from_name: form.name,
          to_name: 'Dubée',
          from_email: form.email,
          to_email: 'melvin.dubee@gmail.com',
          message: form.message,
        },
        '9uX-mlRsTVjj3LBnW'
      )
      .then(
        () => {
          setLoading(false);
          setMessageSent(true);
          setTimeout(() => setMessageSent(false), 3000); // Message envoyé disparaît après 3s
          alert('Merci. Je reviendrai vers vous dans les plus brefs délais.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('L\'envoi n\'a pas fonctionné. Merci de réessayer.');
        }
      );
  };

  const contactStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '150px 20px',
  };

  const contactContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px',
    transform: 'translateY(-80px)',
  };

  const contactSubtitleStyle = {
    fontSize: '20px',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#666',
    marginBottom: '50px',
  };

  const contactBoxStyle = {
    background: '#151515',
    borderRadius: '64px',
    textAlign: 'center',
    padding: '60px',
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contactTitleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '20px',
  };

  const contactFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  };

  const labelStyle = {
    fontSize: '16px',
    color: '#ccc',
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: '5px',
  };

  const inputTextAreaStyle = {
    backgroundColor: '#2c2c2c',
    color: '#fff',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #444',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
  };

  const textAreaStyle = {
    resize: 'vertical',
    minHeight: '120px',
  };

  const contactBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.7) -5.91%, rgba(74, 47, 189, 0.7) 111.58%)',
    color: 'white',
    fontWeight: 'bold',
    padding: '12px 24px',
    border: '2px solid white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    width: '100%',
    maxWidth: '250px',
    margin: '20px auto 0 auto',
    gap: '10px',
  };

  const sendIconStyle = {
    width: '20px',
    height: '20px',
  };

  const contactBtnHoverStyle = {
    color: '#000',
    background: '#fff',
    borderColor: '#fff',
  };

  const contactBtnDisabledStyle = {
    backgroundColor: '#666',
    cursor: 'not-allowed',
  };

  return (
    <section style={contactStyle} id="contact">
      <div style={contactContainerStyle}>
        <p style={contactSubtitleStyle}>Pour me contacter..</p>
        <div style={contactBoxStyle}>
          <h3 style={contactTitleStyle}>Contact</h3>
          <form ref={formRef} onSubmit={handleSubmit} style={contactFormStyle}>
            <div>
              <label style={labelStyle}>Votre Nom</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Quel est votre nom?"
                required
                style={inputTextAreaStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Votre Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Quel est votre email?"
                required
                style={inputTextAreaStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Votre Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Quel est votre message?"
                required
                style={{ ...inputTextAreaStyle, ...textAreaStyle }}
              />
            </div>

            <button
              type="submit"
              style={loading ? { ...contactBtnStyle, ...contactBtnDisabledStyle } : contactBtnStyle}
              disabled={loading}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseOver={(e) => {
                e.target.style.color = '#000';
                e.target.style.background = '#fff';
                e.target.style.borderColor = '#fff';
              }}
              onMouseOut={(e) => {
                e.target.style.color = 'white';
                e.target.style.background =
                  'linear-gradient(90.21deg, rgba(170, 54, 124, 0.7) -5.91%, rgba(74, 47, 189, 0.7) 111.58%)';
                e.target.style.borderColor = 'white';
              }}
            >
              <img src={isHovered ? sendHover : send} alt="Envoyer" style={sendIconStyle} />
              {loading ? 'Envoi en cours...' : messageSent ? 'Envoyé!' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};