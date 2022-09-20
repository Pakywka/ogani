import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './ProductItem.module.scss';

import { addItem } from '../../store/cart/slice';
import { CartItem } from '../../store/cart/types';

type ProductItemProps = {
    id: number;
    imageSrc: string;
    categoryName: string;
    name: string;
    price: number;
    oldPrice: number;
};

export const ProductItem: React.FC<ProductItemProps> = ({
    id,
    imageSrc,
    categoryName,
    name,
    price,
    oldPrice,
}) => {
    const dispatch = useDispatch();

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            imageSrc,
            name,
            price,
            count: 0,
        };
        dispatch(addItem(item));
    };

    return (
        <div className={`${styles.root} productItem`}>
            <div className={styles.top}>
                <button className={styles.like}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        color="hsl(0, 0%, 100%)">
                        <path
                            d="M19.1 7.25a5.06 5.06 0 00-4.96-4.75c-1.73 0-3.25.98-4.14 2.38A4.97 4.97 0 005.86 2.5 5.05 5.05 0 00.9 7.25c-.82 4.7 6.02 8.5 9.1 11.08 3.09-2.58 9.9-6.37 9.1-11.08z"
                            fill="hsl(0, 0%, 100%)"></path>
                    </svg>
                </button>
                <Link to={`/product/${id}`}>
                    <div
                        className={`${styles.pic} set-bg`}
                        style={{
                            backgroundImage: `url(${require(`../../assets/${imageSrc}`)})`,
                        }}></div>
                </Link>
            </div>

            <div className={styles.bottom}>
                <div className={styles.text}>
                    <div className={styles.categoryName}>{categoryName}</div>
                    <Link to={`/product/${id}`} className={styles.productName}>
                        {name}
                    </Link>
                    <div className={styles.priceWrapper}>
                        <h5 className={styles.price}>${price}</h5>
                        <span className={styles.oldPrice}>{oldPrice ? `$${oldPrice}` : ''}</span>
                    </div>
                </div>
                <button onClick={() => onClickAdd()} className="primary-btn">
                    Buy
                </button>
            </div>
        </div>
    );
};
