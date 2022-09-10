import React from 'react';

import styles from './Hero.module.scss';

import CategoriesBlock from './CategoriesBlock';
import { Search } from '..';

export const Hero: React.FC = () => {
    return (
        <div className="container">
            <div className={styles.root}></div>
        </div>
    );
};
