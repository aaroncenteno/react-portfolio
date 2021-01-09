import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // IsValid Conditional Statement
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value})
        }
        console.log('errorMessage', errorMessage);
    }

    console.log(formState)
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1 className="section-title">Contact Me</h1>
            <div className="form-container">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <br></br>
                        <input type="text" defaultValue={name} name="name" onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <br></br>
                        <input type="email" defaultValue={email} name="email" onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <br></br>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default ContactForm;