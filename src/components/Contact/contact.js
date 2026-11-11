import "./contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const PortfolioContactForm = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] =useState({text: '', type: ''});

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatusMessage({text: '', type: ''});

        emailjs
        .sendForm(
            'service_wmdjpxt',
            'template_ucmnvge',
            form.current,
            '_OCfdr-RlrcSex2j_'
        )
        .then(
            () => {
                setStatusMessage({
                    text: 'Thank you for your message! I will get back to you as soon as possible.', 
                    type: 'success'
                });
                form.current.reset();
            },
            () => {
                setStatusMessage({
                    text: 'Oops! Something went wrong. Please try again later.',
                    type: 'error'
                });
            }
        )
        .finally(() => {
            setIsSubmitting(false);
        });
    };

    return(
        <div className="portfolio-contact-wrapper">
            <form ref={form} onSubmit={sendEmail} className="portfolio-contact-form" noValidate>
                <h2>Let's Get In Touch!</h2>
                <p className="form-subtitle">Feel free to reach out to me with any questions or opportunities!</p>

                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        required
                        maxLength="50"
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                </div>

                <div className= 'form-group'>
                    <label htmlFor="Subject">Subject</label>
                    <input 
                        type="text"
                        id="Subject"
                        name="Subject"
                        maxLength="100"
                    />
                </div>

                <div className= 'form-group'>
                    <label htmlFor="message">Message</label>
                    <textarea
                        placeholder="Your message here...600 characters max"
                        id="message"
                        name="message"
                        rows="5"
                        required
                        maxLength="600"
                    ></textarea>
                </div>

                <button type="submit" disabled={isSubmitting} className="portfolio-btn">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default PortfolioContactForm;