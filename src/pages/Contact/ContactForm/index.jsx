import React from 'react';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
    return (
        <div className={`${styles.root} spad`}>
            <div className="container">
                <h2 className={styles.headline}>Leave Message</h2>
                <form className={styles.form} action="#">
                    <div className={styles.form__wrapper}>
                        <div className={styles.form__input}>
                            <input className="input__name" type="text" placeholder="Your name" />
                            <input className="input__email" type="text" placeholder="Your Email" />
                        </div>
                        <textarea placeholder="Your message"></textarea>
                        <button type="submit" className="site-btn">
                            SEND MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
