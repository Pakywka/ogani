import React from 'react';

import styles from './Hero.module.scss';

import CategoriesBlock from './CategoriesBlock';
import { Search } from '..';

export const Hero: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.root}>
                <CategoriesBlock />
                <Search />
                <div className={styles.phone}>
                    <div className={styles.icon}>
                        <i className="fa fa-phone"></i>
                    </div>
                    <div className={styles.text}>
                        <h5>+65 11.188.888</h5>
                        <span>support 24/7 time</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
