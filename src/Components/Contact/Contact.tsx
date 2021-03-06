import React, { useState } from 'react'
import './Contact.css'

function ContactForm() {
    // state management
    const [name, setName] = useState(String)
    const [email, setEmail] = useState(String)
    const [message, setMessage] = useState(String)
    const [loading, setLoading] = useState(false)
    const [formSubmitted, setformSubmitted] = useState(false)
    const combinedState = {name: name, email: email, message: message}

    function handleSubmission(e:any) {
        e.preventDefault()
        setLoading(true)
        
        const url = "" // Endpoint + /submitForm
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json',
                    'Accept': 'applications/json'
                },
                body: JSON.stringify(combinedState),
            })
            .then(response => response.text())
            .then(text => {
                console.log(text)
                console.log('success')
                formReset()
            })
            .catch((error) => {
                console.error(error)
            }
        )
    }

    function formReset() {
        // Clear inputs from form
        setName("")
        setEmail("")
        setMessage("")
        Array.from(document.querySelectorAll('input')).forEach(input => input.value='')
        Array.from(document.querySelectorAll('textarea')).forEach(input => input.value='')

        setLoading(false)
        setformSubmitted(true)
    }

    const returnSpinner = () => (<div id="spinner">
        <h3>Sending message...</h3>
        <img src="" id="loadingSpinner" alt="Loading spinner" />
    </div>)

    const returnDone = () => (<div id="formDone">
        <img src="" id="doneCheckmark" alt="Checkmark" />
        <h1>Successfully sent.</h1>
    </div>)

    return (<form id="contact-form">
        <input
            type="text"
            placeholder="Name"
            name="name"
            className="formInput"
            onChange={(e) => setName(e.target.value)}
            required />
        <input type="text"
            placeholder="Email address"
            name="email"
            className="formInput"
            onChange={(e) => setEmail(e.target.value)}
            required />
        <textarea
            placeholder="Message"
            name="message"
            className="formInput"
            onChange={(e) => setMessage(e.target.value)}
            maxLength={3000}
            required />
        {
            loading ? returnSpinner() : <input type="button" value="Submit" id="submitButton" onClick={handleSubmission} />
        }
        {
            formSubmitted ? returnDone() : null
        }
</form>)
}

const Contact = () => (<div>
    <div id="contact-page-info">
        <h1>Contact</h1>
    </div>
    <ContactForm />
</div>)

export default Contact