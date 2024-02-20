import { useState } from 'react';

export default function ContactPage() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
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
        <form onSubmit={handleFormSubmit} className='justify-content-center '>
            <label>Name:</label>
            <input type="text" 
                   value={name} 
                   placeholder='name'
                   onChange={handleNameChange} 
                   onBlur={handleNameBlur} />
            {nameError && 
            <div className='error'>{nameError}</div>}
    
            <label>Email:</label>
            <input type="email" 
                   value={email} 
                   placeholder='email'
                   onChange={handleEmailChange} 
                   onBlur={handleEmailBlur} />
            {emailError && 
            <div className='error'>{emailError}</div>}

            <label>Message:</label>
            <textarea type='text' 
                      value={message} 
                      placeholder='enter message here <3'
                      onChange={handleMessageChange}
                      onBlur={handleMessageBlur} />
            {messageError && 
                <div className='error'>{messageError}</div>}
            <button> Submit</button>
      </form>
    );
}
