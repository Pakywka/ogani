import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Cart.module.scss';

import CartItem from './CartItem';
import { clearItems } from '../../store/cart/slice';
import { useAppSelector } from '../../store/hooks';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { totalPrice, items } = useAppSelector((state) => state.cart);
    const totalCount = items.reduce((sum: number, item) => sum + item.count, 0);

    const goBack = () => navigate(-1);

    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) {
            dispatch(clearItems());
        }
    };
    const shoppingCartElements = items.map((item, i: number) => <CartItem key={i} {...item} />);

    return (
        <div className={styles.root}>
            <div className={styles.buttons}>
                <button onClick={goBack} className={`${styles.cartBtn} primary-btn`}>
                    CONTINUE SHOPPING
                </button>
                <Link to="/cart" className={`${styles.cartBtn} primary-btn`}>
                    <span className="icon_loading"></span>
                    Update Cart
                </Link>
            </div>
            <h2 className={styles.rootTitle}>Cart</h2>
            <div className={styles.tableAndCheckout}>
                {totalPrice ? (
                    <>
                        <div className={styles.table}>{shoppingCartElements}</div>
                        <div className={styles.checkout}>
                            <div className={styles.checkout__top}>
                                <div className={styles.checkout__title}>
                                    <span className={styles.title__text}>Pickup</span>
                                    <button className={styles.editButton}>
                                        <span className="button-icon">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                color="#cccccc">
                                                <path
                                                    d="M4.83 15.72a.5.5 0 00-.13.25L4 19.42a.49.49 0 00.58.57l3.45-.69c.1-.02.18-.06.25-.13L16 11.45 12.55 8l-7.72 7.72zM18.35 5.65a2.21 2.21 0 00-3.13 0L14 6.87 17.13 10l1.22-1.22a2.2 2.2 0 000-3.13z"
                                                    fill="#cccccc"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className={styles.checkout__address}>Hudson Yards</div>
                            </div>

                            <ul>
                                <li>
                                    Subtotal <span>${totalPrice}</span>
                                </li>
                                <li>
                                    Packet <span>$0.49</span>
                                </li>
                                <li>
                                    Total{' '}
                                    <span className={styles.checkout__total}>${totalPrice}</span>
                                </li>
                            </ul>
                            <Link to="/checkout" className="primary-btn">
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                        {/* <div className={styles.bottom}>
                                    <div className={styles.continue}>
                                        <div className={styles.discount}>
                                            <h5>Discount Codes</h5>
                                            <form action="#">
                                                <input
                                                    type="text"
                                                    placeholder="Enter your coupon code"
                                                />
                                                <button type="submit" className="site-btn">
                                                    APPLY COUPON
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div> */}
                    </>
                ) : (
                    <div className={styles.empty}>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="250"
                            height="250"
                            viewBox="0 0 462.189 462.188"
                            color="#50b946">
                            <path
                                d="M428.328,118.851h-8.407l31.039-31.043c9.979-9.978,9.979-26.142,0-36.118c-9.972-9.978-26.142-9.978-36.116,0
		l-48.395,48.396c-1.164-0.106-2.288-0.353-3.48-0.353c-14.512,0-27.141,7.669-34.32,19.117H131.175
		c-7.181-11.448-19.82-19.117-34.321-19.117c-1.193,0-2.32,0.247-3.48,0.353L44.98,51.69c-9.976-9.978-26.145-9.978-36.115,0
		c-9.979,9.976-9.979,26.14,0,36.118l31.037,31.043h-6.041C15.158,118.851,0,134.014,0,152.705v23.705
		c0,17.661,13.584,32,30.843,33.552l25.409,168.726c0,21.696,17.591,39.295,39.292,39.295h271.101
		c21.702,0,39.289-17.599,39.289-39.295l25.414-168.726c17.259-1.552,30.841-15.891,30.841-33.552v-23.705
		C462.194,134.014,447.029,118.851,428.328,118.851z M156.946,378.677H96.315l-8.64-66.32h69.271V378.677z M156.946,286.561H83.749
		l-7.863-66.328h81.061V286.561z M261.961,378.677h-61.417v-66.325h61.417V378.677z M261.961,286.561h-61.417v-66.321h61.417
		V286.561z M358.921,378.677h-48.446v-66.325h60.227L358.921,378.677z M375.828,286.561h-65.353v-66.321h77.139L375.828,286.561z"
                                fill="#50b946"
                            />
                        </svg>
                        <div className={styles.empty__text}>
                            <h3>There are no items in your cart</h3>
                            <p className={styles.subhead}>
                                <Link to="/shop" className={styles.directToShop}>
                                    Browse the catalog
                                </Link>
                                , check discounts or use the search to find the right product
                            </p>
                            <Link to="/shop" className="primary-btn">
                                Start shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
