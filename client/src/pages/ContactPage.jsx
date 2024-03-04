import React from 'react';

import { useState } from 'react';
import anime from 'animejs';

export default function ContactPage() {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	})

    const handleInputChange = (e) => {

		const { name, value } = e.target;

		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
    };

    const handleNameBlur = () => {
        if (!formData.name) {
        	setFormData(prevState => ({
				...prevState,
				nameError: ' * name is required '
			}))
        } else {
        	setFormData(prevState => ({
				...prevState,
				nameError: ''
			}))
        }
    };

    const handleEmailBlur = () => {
        if (!formData.email) {
			setFormData(prevState => ({
				...prevState,
				emailError: '* email is required'
			}));
        } else if (!/^([a-zA-Z0-9._-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/.test(formData.email)) {
			setFormData(prevState => ({
				...prevState,
				emailError: '* invalid email format'
			}));
        } else {
			setFormData(prevState => ({
				...prevState,
				emailError: ''
			}));
        }
    };

    const handleMessageBlur = () => {
        if (!formData.message) {
			setFormData(prevState => ({
				...prevState,
				messageError: '* message is required'
			}));
        } else if(!/^.{20,}$/.test(formData.message)) {
			setFormData(prevState => ({
				...prevState,
				messageError: '* must contain at least 20 characters'
			}));
		}
		else {
        	setFormData(prevState => ({
				...prevState,
				messageError: ''
			}));
        }
    };


	function modal(message) {

		const modalElement = document.querySelector('.anime-modal');
		modalElement.textContent = message;

		const tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 1000,
			
		});
		  
		  // Add children
		tl
			.add({
				targets: '.anime-modal',
				translateY: 350,
				// innerHTML: ` ${message}`
			})
			.add({
				targets: '.anime-modal',
				translateY: 0,
				delay: 1000
			})
	}

    const handleFormSubmit = async (e) => {
        e.preventDefault() 

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			  });
			if (response.ok) {
				modal('email sent');
				setFormData({ name: '', email: '', message: '' });
			} else {
				modal('Failed to send email');
				console.log({formData})
			}
		} catch (err) {
			console.log('error sending email:', err)
		}
    };

    return (
        <div className="display-flex justify-content-center">
			<div className='anime-modal border-style border-radius'>
			</div>
            <form onSubmit={handleFormSubmit} className="padding border-style text-shadow">
                <label>Name:</label>
                <input 
					type="text" 
                    name="name"
                    value={formData.name} 
                    placeholder="name"
                    onChange={handleInputChange} 
                    onBlur={handleNameBlur} />
                {formData.nameError && 
                <div className="error">{formData.nameError}</div>}
        
                <label>Email:</label>
                <input 
					type="email" 
                    name="email"
                    value={formData.email} 
                    placeholder="email"
                    onChange={handleInputChange} 
                    onBlur={handleEmailBlur} />
                {formData.emailError && 
                <div className="error">{formData.emailError}</div>}

                <label>Message:</label>
                <textarea 
						type="text" 
                        name="message"
                        value={formData.message} 
                        placeholder="enter message here <3"
                        onChange={handleInputChange}
                        onBlur={handleMessageBlur} />
                {formData.messageError && 
                    <div className="error">{formData.messageError}</div>}
                <button type='submit'> Submit</button>
            </form>
        </div>
    );
}