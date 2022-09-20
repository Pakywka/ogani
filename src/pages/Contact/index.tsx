import { Link } from 'react-router-dom';
import styles from './Contact.module.scss';
import { ShopItem } from './ShopItem';

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
        <ShopItem shopName={obj.shopName} shopAddress={obj.shopAddress} />
    ));
    return (
        <div className={styles.root}>
            <div className={styles.headline}>
                <h2>Shops in New York</h2>
                <button>
                    <span className={styles.anotherCity}>Another city</span>
                </button>
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

            <div className={styles.shopList__wrapper}>
                <h2 className={styles.shopList__title}>Shops</h2>
                <div className={styles.shopList}>{shopList}</div>
            </div>
        </div>
    );
};

export default Contact;
