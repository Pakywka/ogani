import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import styles from './HeaderMenu.module.scss';

import Languages from '../Languages';
import MenuList from '../MenuList';
import SocialList from '../SocialList';
import { selectCart } from '../../../redux/cart/selectors';

type HeaderMenuProps = {
    openMenu: () => void;
};

const HeaderMenu: React.FC<HeaderMenuProps> = ({ openMenu }) => {
    const { items, totalPrice } = useSelector(selectCart);

    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    return (
        <>
            <div className={styles.top}>
                <div className={`${styles.top__wrapper} container`}>
                    <div className={styles.contact}>
                        <span>
                            <i className="fa fa-envelope"></i> hello@colorlib.com
                        </span>
                        <span>Free Shipping for all Order of $99</span>
                    </div>
                    <div className={styles.bar}>
                        <SocialList />
                        <Languages />
                        <a className={styles.auth} href="#s">
                            <i className="fa fa-user"></i> <span>Login</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className={`${styles.wrapper} container`}>
                <Link to="/" className={styles.logo}>
                    <img src="../../../img/logo.png" alt="" />
                </Link>

                <nav className={styles.nav}>
                    <MenuList />
                </nav>
                <div className={styles.cart}>
                    <div className={styles.cart__icons}>
                        <a href="#s">
                            <i className="fa fa-heart"></i> <span>1</span>
                        </a>
                        <Link to="/cart">
                            <i className="fa fa-shopping-bag"></i> <span>{totalCount}</span>
                        </Link>
                    </div>
                    <div className={styles.cart__price}>
                        item: <span>${totalPrice}</span>
                    </div>
                    <button onClick={openMenu} className={styles.hamburgerOpen}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>
        </>
    );
};

export default HeaderMenu;
