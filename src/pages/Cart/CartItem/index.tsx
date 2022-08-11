import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCart } from '../../../redux/cart/selectors';
import { addItem, minusItem, removeItem } from '../../../redux/cart/slice';
import { CartItem } from '../../../redux/cart/types';

import styles from './CartItem.module.scss';

type CartItemProps = {
    id: number;
    imageSrc: string;
    name: string;
    price: number;
    count: number;
};

const CartItemBlock: React.FC<CartItemProps> = ({ id, imageSrc, name, price, count }) => {
    const dispatch = useDispatch();
    const [total, setTotal] = React.useState(price * count);

    const onClickPlus = () => {
        dispatch(
            addItem({
                id,
            } as CartItem),
        );
        setTotal(price * count);
    };
    const onClickMinus = () => {
        dispatch(minusItem(id));
        setTotal(price * count);
    };
    const onClickRemove = () => {
        if (window.confirm('Ты действительно хочешь удалить товар?')) {
            dispatch(removeItem(id));
        }
    };

    return (
        <div className={styles.root}>
            <div className={styles.product}>
                <Link to={`/product/${id}`}>
                    <img className={styles.productImage} src={imageSrc} alt="" />
                </Link>
                <Link to={`/product/${id}`}>
                    <h6>{name}</h6>
                </Link>
            </div>
            <div className={styles.price}>${price}</div>
            <div className={styles.quantity}>
                <button
                    disabled={count === 1}
                    onClick={onClickMinus}
                    className={`${count === 1 ? 'disabled' : ''} dec qtybtn`}>
                    -
                </button>
                <input type="text" value={count} />
                <button onClick={onClickPlus} className="inc qtybtn">
                    +
                </button>
            </div>
            <div className={styles.total}>${total}</div>
            <div onClick={onClickRemove} className={styles.close}>
                <svg
                    className={styles.iconClose}
                    height="200"
                    viewBox="0 0 200 200"
                    width="200"
                    xmlns="http://www.w3.org/2000/svg">
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
            </div>
        </div>
    );
};

export default CartItemBlock;
