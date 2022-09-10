import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ReactSelect from 'react-select';
import { Breadcrumb } from '../../components';
import CheckoutInput from './CheckoutInput';
import CartItem from '../Cart/CartItem';
import { IOption, IShippingFields } from './interface';

import styles from './Checkout.module.scss';
import { Delivery } from './components/delivery';
import { Payment } from './components/payment';
import { Confirmation } from './components/confirmation';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { CheckoutRoutePath } from './routes/pathes';
import { useAppSelector } from '../../redux/hooks';

const options: IOption[] = [
    { value: 'russia', label: 'Russia' },
    { value: 'china', label: 'China' },
    { value: 'germany', label: 'Germany' },
    { value: 'australia', label: 'Australia' },
    { value: 'united-kingdom', label: 'United Kingdom' },
];

const Checkout: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm<IShippingFields>({
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<IShippingFields> = (data) => {
        reset();
    };

    const { totalPrice, items } = useAppSelector((state) => state.cart);

    const orderProducts = items.map((item, i) => <li key={i}>{item.name}</li>);

    let location = useLocation();

    return (
        <div>
            <>
                <Routes>
                    <Route path={location + CheckoutRoutePath.Delivery} element={<Delivery />} />
                    <Route path={location + CheckoutRoutePath.Payment} element={<Payment />} />
                    <Route
                        path={location + CheckoutRoutePath.Confirmation}
                        element={<Confirmation />}
                    />
                </Routes>
            </>
            <section className={`${styles.root} spad`}>
                <div className="container">
                    <div className={styles.couponWrapper}>
                        <h6>
                            <span className="icon_tag_alt"></span> Have a coupon?{' '}
                            <button>Click here</button> to enter your code
                        </h6>
                    </div>

                    <h4>Billing Details</h4>
                    <div onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
                        <form className={styles.form}>
                            <div className={styles.inputWrapper}>
                                <div>
                                    <label>First Name *</label>
                                    <input
                                        {...register('firstName', {
                                            required: 'First name is require field!',
                                            minLength: 4,
                                        })}
                                        className={styles.inputClassic}
                                    />
                                    {errors?.firstName && <span>{errors.firstName?.message}</span>}
                                </div>
                                <div>
                                    <label>Last name *</label>
                                    <input
                                        {...register('lastName', {
                                            required: 'Last name is require field!',
                                            pattern: {
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Please enter valid first name!',
                                            },
                                        })}
                                        className={styles.inputClassic}
                                    />
                                    {errors?.lastName && <span>{errors.lastName?.message}</span>}
                                </div>
                            </div>

                            <div className={styles.addressWrapper}>
                                <div>
                                    <label>Country *</label>
                                    <Controller
                                        control={control}
                                        name="address.country"
                                        rules={{ required: 'Country is required' }}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                        }) => (
                                            <>
                                                <ReactSelect
                                                    options={options}
                                                    placeholder="Countries"
                                                    className={styles.controller}
                                                />
                                                {error && <span>{error.message}</span>}
                                            </>
                                        )}
                                    />
                                </div>
                                <div>
                                    <label>City *</label>
                                    <input
                                        {...register('address.city', {
                                            required: 'City is required!',
                                        })}
                                        className={styles.inputClassic}
                                    />
                                    {errors?.address?.city && (
                                        <span>{errors.address?.city?.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label>Postcode *</label>
                                    <input
                                        {...register('address.postcode', {
                                            required: 'Postcode is required',
                                            maxLength: 6,
                                        })}
                                        className={styles.inputClassic}
                                    />
                                    {errors.address?.postcode && (
                                        <span>{errors.address.postcode.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className={styles.inputWrapper}>
                                <div>
                                    <label>Phone number *</label>
                                    <input
                                        {...register('phoneNumber', {
                                            required: 'Phone number is required',
                                            maxLength: 6,
                                        })}
                                        className={styles.inputClassic}
                                    />
                                    {errors.phoneNumber && (
                                        <span>{errors.phoneNumber.message}</span>
                                    )}
                                </div>
                                <div>
                                    <label>Email *</label>
                                    <input
                                        {...register('email', {
                                            required: 'Email is require field!',
                                            pattern: {
                                                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'Please enter valid email!',
                                            },
                                        })}
                                        className={styles.inputClassic}
                                    />
                                    {errors?.email && <span>{errors.email?.message}</span>}
                                </div>
                            </div>
                            <div className={styles.createAccount}>
                                <label>Create an account?</label>
                                <input
                                    {...register('createAccount')}
                                    type="checkbox"
                                    className={styles.checkbox}
                                />
                                <p>
                                    Create an account by entering the information below. If you are
                                    a returning customer please login at the top of the page
                                </p>
                                <label>Password *</label>
                                <input
                                    {...register('password')}
                                    type="password"
                                    className={styles.inputClassic}
                                />
                            </div>
                            <div className={styles.differentAddress}>
                                <label>Ship to a different address?</label>
                                <input
                                    {...register('differentAddress')}
                                    type="checkbox"
                                    className={styles.checkbox}
                                />
                            </div>
                            <div className={styles.notes}>
                                <label>Order notes*</label>
                                <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                            </div>
                        </form>
                        <div className={styles.order}>
                            <h4>Your Order</h4>
                            <div className={styles.order__products}>
                                Products <span>Total</span>
                            </div>
                            <ul>{orderProducts}</ul>
                            <div className={styles.order__subtotal}>
                                Subtotal <span>$750.99</span>
                            </div>
                            <div className={styles.order__total}>
                                Total <span>${totalPrice}</span>
                            </div>

                            <div className={styles.input__checkbox}>
                                <label htmlFor="payment">
                                    Check Payment
                                    <input type="checkbox" id="payment" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className={styles.input__checkbox}>
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
                </div>
            </section>
        </div>
    );
};

export default Checkout;
