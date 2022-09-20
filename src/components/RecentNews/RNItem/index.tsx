import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './RNItem.module.scss';

export const Post: FC = () => {
    return (
        <Link to="#" className={styles.root}>
            <div className={styles.pic}>
                <img src="img/blog/sidebar/sr-1" alt="" />
            </div>
            <div className={styles.text}>
                <h6>
                    09 Kinds Of Vegetables
                    <br /> Protect The Liver
                </h6>
                <span>MAR 05, 2019</span>
            </div>
        </Link>
    );
};
