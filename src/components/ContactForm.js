import React from 'react';
import './ContactForm.css';

const antiSpamStyles = {
    position: 'absolute',
    left: '-5000px'
}

function ContactForm() {
    return (
        <div id="contactForm">
            <form action="https://app.99inbound.com/api/e/ZcuIhPX9" method="POST" target="_blank">
                <h2 className="text-center">Contact me:</h2>
                <p id="errorHandler" className="text-center"></p>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" name="emailAdress" className="form-control" id="email" placeholder="name@example.com" required />
                    <label for="name">Name/company name</label>
                    <input type="text" name="companyName" className="form-control" id="name" placeholder="name/company name" aria-label="Name/company name" />
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea name="messageContent" className="form-control" id="message" rows="3" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-secondary" aria-pressed="false">Submit</button>
                </div>
                <div style={antiSpamStyles}>
                    <input aria-label="Check me" type="checkbox" name="grandpas_salmon_spotted_lake" value="1" tabindex="-1" autocomplete="no" />
                </div>
            </form>
        </div>
    );
}

export default ContactForm;