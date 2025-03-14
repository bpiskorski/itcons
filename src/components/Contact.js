import React, { useState } from 'react';
import "./Contact.css";


const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [message, setMessage] = useState('');
    const [areaOfExpertise, setAreaOfExpertise] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // submit form data to server or do something with it
        // reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setCompanyName('');
        setMessage('');
        setAreaOfExpertise('');
    };

    return (
        <div>
            <h1>Contact Us</h1>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <div className="name-fields">
                    <label>
                        First Name:
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </label>
                </div>
                <div className="name-fields">
                    <label>
                        Last Name
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </label>
                </div>
                <br />

                <div className="name-fields">
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                </div>

                <div className="name-fields">
                    <label>
                        Company Name:
                        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
                    </label>
                </div>
                <br />
                <div class="name-fields2">
                    <label>
                        Area of Expertise:
                        <select value={areaOfExpertise} onChange={(e) => setAreaOfExpertise(e.target.value)} required>
                            <option value="">Select an option</option>
                            <option value="Computer Repair and Maintenance">Computer Repair and Maintenance</option>
                            <option value="IT Consulting">IT Consulting</option>
                            <option value="Network Installation and Support">Network Installation and Support</option>
                            <option value="Databases">Databases</option>
                            <option value="Other">Other</option>
                        </select>
                    </label>
                    <br />
                </div>
                <div>
                    <label className='message'>
                        Message:
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </label>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default Contact;
