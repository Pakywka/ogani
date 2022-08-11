import React from 'react';
import { useSelector } from 'react-redux';
import { Breadcrumb } from '../../components';
import { selectCart } from '../../redux/cart/selectors';
import CheckoutInput from './CheckoutInput';
import CartItem from '../Cart/CartItem';

const Checkout: React.FC = () => {
    const { totalPrice, items } = useSelector(selectCart);

    const orderProducts = items.map((item, i) => <li key={i}>{item.name}</li>);

    return (
        <div className="Checkout">
            <Breadcrumb headline="Checkout" />
            <section className="checkout spad">
                <div className="container">
                    <h6>
                        <span className="icon_tag_alt"></span> Have a coupon?{' '}
                        <a href="#s">Click here</a> to enter your code
                    </h6>
                    <div className="checkout__details">
                        <h4>Billing Details</h4>
                        <form action="#">
                            <div className="form__wrapper">
                                <div className="checkout__form">
                                    <div className="input__wrapper">
                                        <CheckoutInput label="First Name" type="text" />
                                        <CheckoutInput label="Last Name" type="text" />
                                    </div>
                                    <CheckoutInput label="Country" type="text" />
                                    <div className="checkout__input">
                                        <p>
                                            Address<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            className="checkout__input__add"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Apartment, suite, unite ect (optinal)"
                                        />
                                    </div>
                                    <CheckoutInput label="Town/City" type="text" />
                                    <CheckoutInput label="Country/State" type="text" />
                                    <CheckoutInput label="Postcode / ZIP" type="number" />
                                    <div className="input__wrapper">
                                        <CheckoutInput label="Phone" type="tel" />
                                        <CheckoutInput label="Email" type="email" />
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="acc">
                                            Create an account?
                                            <input type="checkbox" id="acc" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>
                                        Create an account by entering the information below. If you
                                        are a returning customer please login at the top of the page
                                    </p>
                                    <CheckoutInput label="Account Password" type="password" />
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="diff-acc">
                                            Ship to a different address?
                                            <input type="checkbox" id="diff-acc" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Order notes<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                                <div className="checkout__order">
                                    <h4>Your Order</h4>
                                    <div className="checkout__order__products">
                                        Products <span>Total</span>
                                    </div>
                                    <ul>{orderProducts}</ul>
                                    <div className="checkout__order__subtotal">
                                        Subtotal <span>$750.99</span>
                                    </div>
                                    <div className="checkout__order__total">
                                        Total <span>${totalPrice}</span>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="acc-or">
                                            Create an account?
                                            <input type="checkbox" id="acc-or" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="payment">
                                            Check Payment
                                            <input type="checkbox" id="payment" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="checkout__input__checkbox">
                                        <label htmlFor="paypal">
                                            Paypal
                                            <input type="checkbox" id="paypal" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <button type="submit" className="site-btn">
                                        PLACE ORDER
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Checkout;
