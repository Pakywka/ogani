import { Breadcrumb } from '../../components';
import ContactForm from './ContactForm';

import styles from './Contact.module.scss';

const Contact = () => {
    return (
        <div className="contact-page">
            <Breadcrumb headline="Contact Us" />
            <section className={styles.root}>
                <div className="container">
                    <div className={styles.contact__wrapper}>
                        <div className={styles.contact__widget}>
                            <span className="icon_phone"></span>
                            <h4>New York</h4>
                            <p>+12-345-6789</p>
                        </div>
                        <div className={styles.contact__widget}>
                            <span className="icon_phone"></span>
                            <h4>New York</h4>
                            <p>+12-345-6789</p>
                        </div>
                        <div className={styles.contact__widget}>
                            <span className="icon_phone"></span>
                            <h4>New York</h4>
                            <p>+12-345-6789</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                    height="500"
                    style={{ border: 0 }}
                    aria-hidden="false"
                    tabIndex={0}></iframe>
                <div className="map-inside">
                    <i className="icon_pin"></i>
                    <div className="inside-widget">
                        <h4>New York</h4>
                        <ul>
                            <li>Phone: +12-345-6789</li>
                            <li>Add: 16 Creek Ave. Farmingdale, NY</li>
                        </ul>
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
    );
};

export default Contact;
