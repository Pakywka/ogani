import React from 'react';
import styles from './Preloder.module.scss';

export const Preloder: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.loader}></div>
        </div>
    );
};
