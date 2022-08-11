import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './ProductItem.module.scss';

import { HoverBtns } from '../';
import { addItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

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
                <Link to={`/product/${id}`}>
                    <div
                        className={`${styles.pic} set-bg`}
                        style={{ backgroundImage: `url(${imageSrc})` }}></div>
                </Link>
                <HoverBtns
                    id={id}
                    imageSrc={imageSrc}
                    name={name}
                    price={price}
                    oldPrice={oldPrice}
                />
            </div>

            <Link to={`/product/${id}`}>
                <div className={styles.text}>
                    <span className={styles.categoryName}>{categoryName}</span>
                    <h5 className={styles.productName}>{name}</h5>
                </div>
            </Link>
            <div className={styles.buy}>
                <h5>${price}.00</h5>
                <span>{oldPrice ? `$${oldPrice}.00` : ''}</span>
                <button onClick={() => onClickAdd()} className="primary-btn">
                    Buy
                </button>
            </div>
        </div>
    );
};
