import React from 'react';
import Link from "next/link";
import style from "@/app/contact/contact.module.css"
import { MdEmail ,MdForum, MdVoiceChat } from "react-icons/md";

const ContactCard = () => {
    return (
        <div className={style.section}>
            <div className={style.container}>
                <div className={style.grid}>
                    <div className={style.grid_card}>
                        <i><MdEmail/></i>
                        <h2>Email</h2>
                        <p>Monday to friday expected</p>
                        <p className={style.last_para}>response time:72 hours</p>
                        <Link href="/">
                            Send Email <span>-&gt;</span>
                        </Link>
                    </div>
                    <div className={style.grid_card}>
                        <i><MdVoiceChat/></i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p className={style.last_para}>Weekends: 9 AM — 5 PM ET</p>
                        <Link href="/">
                            Chat Now <span>-&gt;</span>
                        </Link>
                    </div>
                    <div className={style.grid_card}>
                        <i><MdForum/></i>
                        <h2>Community Forum</h2>
                        <p>Monday to friday expected</p>
                        <p className={style.last_para}>response time:72 hours</p>
                        <Link href="/" className={style.anchorLink}>
                            Ask The Community <span>-&gt;</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>);
};

export default ContactCard;