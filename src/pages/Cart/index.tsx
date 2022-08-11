import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Cart.module.scss';

import { Breadcrumb } from '../../components';
import CartItem from './CartItem';
import { selectCart } from '../../redux/cart/selectors';
import { clearItems } from '../../redux/cart/slice';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const { totalPrice, items } = useSelector(selectCart);
    const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);

    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch(clearItems());
        }
    };
    const shoppingCartElements = items.map((item, i: number) => <CartItem key={i} {...item} />);

    return (
        <>
            <Breadcrumb headline="Shopping Cart" />
            <div className="container">
                <div className={styles.root}>
                    <div className={styles.table}>
                        <div className={styles.table__head}>
                            <h4>Products</h4>
                            <h4>Price</h4>
                            <h4>Quantity</h4>
                            <h4>Total</h4>
                            <div></div>
                        </div>
                        {shoppingCartElements}
                    </div>
                    <div className={styles.buttons}>
                        <Link to="/shop" className={`${styles.cartBtn} primary-btn`}>
                            CONTINUE SHOPPING
                        </Link>
                        <button className={`${styles.cartBtn} primary-btn`}>
                            <span className="icon_loading"></span>
                            Update Cart
                        </button>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.continue}>
                            <div className={styles.discount}>
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" className="site-btn">
                                        APPLY COUPON
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={styles.checkout}>
                            <h5>Cart Total</h5>
                            <ul>
                                <li>
                                    Subtotal <span>${totalPrice}</span>
                                </li>
                                <li>
                                    Total <span>${totalPrice}</span>
                                </li>
                            </ul>
                            <Link to="/checkout" className="primary-btn">
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
