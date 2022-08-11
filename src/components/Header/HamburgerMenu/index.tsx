import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './HamburgerMenu.module.scss';

import Languages from '../Languages';
import MenuList from '../MenuList';
import SocialList from '../SocialList';
import { selectCart } from '../../../redux/cart/selectors';

const HamburgerMenu = () => {
    const { items, totalPrice } = useSelector(selectCart);

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    return (
        <div className={styles.root}>
            <Link to="/" className={styles.logo}>
                <img src="img/logo.png" alt="Logo" />
            </Link>
            <div className={styles.cart}>
                <div className={styles.cart__icons}>
                    <a href="#s">
                        <i className="fa fa-heart"></i> <span>1</span>
                    </a>
                    <Link to="/shopping-cart">
                        <i className="fa fa-shopping-bag"></i> <span>{totalCount}</span>
                    </Link>
                </div>
                <div className={styles.cart__price}>
                    item: <span>${totalPrice}</span>
                </div>
            </div>
            <div className={styles.widget}>
                <Languages />
                <a className={styles.auth} href="#s">
                    <i className="fa fa-user"></i> <span>Login</span>
                </a>
            </div>
            <nav className={`${styles.nav} mobile-menu`}>
                <MenuList />
            </nav>
            <SocialList />
            <div className={styles.contact}>
                <span>
                    <i className="fa fa-envelope"></i> hello@colorlib.com
                </span>
                <span>Free Shipping for all Order of $99</span>
            </div>
        </div>
    );
};

export default HamburgerMenu;
