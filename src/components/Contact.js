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

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="contact-subtitle">Pour me contacter..</p>
        <div className="contact-bx">
          <h3 className="contact-title">Contact</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div>
              <label>Votre Nom</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Quel est votre nom?"
                required
              />
            </div>

            <div>
              <label>Votre Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Quel est votre email?"
                required
              />
            </div>

            <div>
              <label>Votre Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Quel est votre message?"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-btn"
              disabled={loading}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img src={isHovered ? sendHover : send} alt="Envoyer" className="send-icon" />
              {loading ? 'Envoi en cours...' : messageSent ? 'Envoyé!' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};