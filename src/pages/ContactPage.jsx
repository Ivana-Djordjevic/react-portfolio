import React from 'react';

import { useState } from 'react';

export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleInputChange = (e) => {

      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;

      if (inputType === 'name') {
        setName(inputValue);
      } else if (inputType === 'email') {
        setEmail(inputValue);
      } else if ( inputType === 'message') {
        setMessage(inputValue);
      }
    };

    const handleNameBlur = () => {
        if (!name) {
          setNameError('* name is required');
        } else {
          setNameError('');
        }
    };

    const handleEmailBlur = () => {
        if (!email) {
          setEmailError('* email is required');
        } else if (!/^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/.test(email)) {
          setEmailError('* invalid email format');
        } else {
          setEmailError('');
        }
    };

    const handleMessageBlur = () => {
        if (!name) {
          setMessageError('* message is required');
        } else {
          setMessageError('');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault() 
    };

    return (
        <div className="display-flex justify-content-center">
            <form onSubmit={handleFormSubmit} className="padding border-style text-shadow">
                <label>Name:</label>
                <input type="text" 
                    name="name"
                    value={name} 
                    placeholder="name"
                    onChange={handleInputChange} 
                    onBlur={handleNameBlur} />
                {nameError && 
                <div className="error">{nameError}</div>}
        
                <label>Email:</label>
                <input type="email" 
                    name="email"
                    value={email} 
                    placeholder="email"
                    onChange={handleInputChange} 
                    onBlur={handleEmailBlur} />
                {emailError && 
                <div className="error">{emailError}</div>}

                <label>Message:</label>
                <textarea type="text" 
                        name="message"
                        value={message} 
                        placeholder="enter message here <3"
                        onChange={handleInputChange}
                        onBlur={handleMessageBlur} />
                {messageError && 
                    <div className="error">{messageError}</div>}
                <button> Submit</button>
            </form>
        </div>
    );
}
