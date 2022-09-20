import React from 'react';
import styles from './LatestProductItem.module.scss';

export const LatestProductItem: React.FC<{ name: string; price: number }> = ({ name, price }) => {
    return (
        <a href="#s" className={styles.latest_product__item}>
            <div className={styles.latest_product__item__pic}></div>
            <div className={styles.latest_product__item__text}>
                <h6>{name}</h6>
                <span>{price}</span>
            </div>
        </a>
    );
};
