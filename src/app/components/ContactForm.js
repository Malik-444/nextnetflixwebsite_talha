"use client"

import React, {useState} from 'react';
import styles from "@/app/contact/contact.module.css"
import {Mulish} from "next/font/google";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
    display: 'swap'
})

const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState(null);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUser((prevUser) => ({...prevUser, [name]: value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {"Content_Type": "application/json"},
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus('success');
            } else {
                setStatus('Error');
            }
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username">
                    Enter Your Name:
                    <input type="text" name="username" id="username"
                           placeholder="Enter Your Name"
                           className={mulish.className}
                           value={user.username}
                           onChange={handleChange}
                           required
                           autoComplete="off"

                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email">
                    Email:
                    <input type="text" name="email" id="email"
                           placeholder="Enter Your Email"
                           className={mulish.className}
                           value={user.email}
                           onChange={handleChange}
                           required
                           autoComplete="off"
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone">
                    Phone No:
                    <input type="number" name="phone" id="phone"
                           placeholder=" Enter Your Phone No"
                           className={mulish.className}
                           value={user.phone}
                           onChange={handleChange}
                           required
                           autoComplete="off"
                    />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message">
                    Message:
                    <textarea name="message" id="message" rows={5}
                              placeholder="Enter Your Message"
                              className={mulish.className}
                              value={user.message}
                              onChange={handleChange}
                              required
                              autoComplete="off"
                    />
                </label>
            </div>
            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank You for your message</p>}
                {status === 'Error' &&
                    <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
                <button type="submit" className={mulish.className}>Send Message</button>
            </div>


        </form>
    );
};

export default ContactForm;