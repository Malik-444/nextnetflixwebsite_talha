import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css"
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (<>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard/>
                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>
                    <ContactForm/>
                </section>

            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13669.500547530353!2d73.43815034455125!3d31.071490519898774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39229d422ce1033d%3A0x3e7971212472fa41!2sJandraka%2C%20Okara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1688252511214!5m2!1sen!2s"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>);
};

export default Contact;