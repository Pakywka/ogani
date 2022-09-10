import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';

const ShopListData = [
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
    {
        shopName: 'Hudson River',
        shopAddress: '2315 Broadway, New York, NY 10024, United States',
    },
];

const Contact = () => {
    const shopList = ShopListData.map((obj) => (
        <Link to="">
            {' '}
            <div className={styles.shopList__item}>
                <div className={styles.item__address}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="currentColor"
                        className={styles.addressIcon}>
                        <path
                            d="M16.243 14.9L12 19l-4.242-4.1a5.66 5.66 0 010-8.201c2.342-2.265 6.141-2.265 8.485 0a5.663 5.663 0 010 8.2z"
                            fill="currentColor"></path>
                    </svg>
                    <div className={styles.item__text}>
                        <span className={styles.shopName}>{obj.shopName}</span>
                        <span className={styles.shopAddress}>{obj.shopAddress}</span>
                    </div>
                </div>
                <div className={styles.item__time}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="#B6BAC2">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12 22a10 10 0 110-20 10 10 0 010 20zm3.19-6.29a.74.74 0 001.03-.26.75.75 0 00-.26-1.03L12.4 12.3V7.68a.75.75 0 10-1.5 0v5.05c0 .26.14.5.37.64l3.92 2.34z"
                            fill="#B6BAC2"></path>
                    </svg>
                    <span>09:00 - 22:00</span>
                </div>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#50b946"
                    className="shop-list-item__arrow">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.22 5.24a1 1 0 00.02 1.41l5.4 5.29-5.4 5.28a1 1 0 101.4 1.43l6.12-6a1 1 0 000-1.43l-6.12-6a1 1 0 00-1.42.02z"
                        fill="#50b946"></path>
                </svg>
            </div>
        </Link>
    ));
    return (
        <>
            <section className={styles.root}>
                <div className="container">
                    <div className={styles.headline}>
                        <h2>Shops in New York</h2>
                        <button>
                            <span className={styles.anotherCity}>Another city</span>
                        </button>
                    </div>
                </div>
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.7570118582908!2d-73.98485388386011!3d40.78935584081522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25884ffc35b31%3A0xe3459aa46ddd2e83!2zSHVkc29uIFJpdmVyIEdyZWVud2F5LCBOZXcgWW9yaywgTlksINCh0KjQkA!5e0!3m2!1sru!2sru!4v1662735498438!5m2!1sru!2sru"
                        height="700"
                        style={{ border: 0 }}
                        loading="lazy"></iframe>
                    <div className="map-inside">
                        <i className="icon_pin"></i>
                        <div className="inside-widget">
                            <h4>New York</h4>
                            <ul>
                                <li>Phone: +65 00 00 00</li>
                                <li>Hudson River Greenway</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className={styles.shopList__wrapper}>
                        <h2 className={styles.shopList__title}>Shops</h2>
                        <div className={styles.shopList}>{shopList}</div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
