import React, { FC } from 'react';

import styles from './ShopItem.module.scss';

interface ShopItemProps {
    shopName: string;
    shopAddress: string;
}

export const ShopItem: FC<ShopItemProps> = ({ shopName, shopAddress }) => {
    return (
        <button className={styles.root}>
            {' '}
            <div className={styles.address}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="currentColor"
                    className={styles.addressIcon}>
                    <path
                        d="M16.243 14.9L12 19l-4.242-4.1a5.66 5.66 0 010-8.201c2.342-2.265 6.141-2.265 8.485 0a5.663 5.663 0 010 8.2z"
                        fill="currentColor"></path>
                </svg>
                <div className={styles.text}>
                    <span className={styles.shopName}>{shopName}</span>
                    <span className={styles.shopAddress}>{shopAddress}</span>
                </div>
            </div>
            <div className={styles.time}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#B6BAC2">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 22a10 10 0 110-20 10 10 0 010 20zm3.19-6.29a.74.74 0 001.03-.26.75.75 0 00-.26-1.03L12.4 12.3V7.68a.75.75 0 10-1.5 0v5.05c0 .26.14.5.37.64l3.92 2.34z"
                        fill="#B6BAC2"></path>
                </svg>
                <span>09:00 - 22:00</span>
            </div>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#50b946"
                className="shop-list-item__arrow">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.22 5.24a1 1 0 00.02 1.41l5.4 5.29-5.4 5.28a1 1 0 101.4 1.43l6.12-6a1 1 0 000-1.43l-6.12-6a1 1 0 00-1.42.02z"
                    fill="#50b946"></path>
            </svg>
        </button>
    );
};
