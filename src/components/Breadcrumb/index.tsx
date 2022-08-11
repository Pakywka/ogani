import React from 'react';
import breadcrumb from '../../img/breadcrumb.jpg';
import { Link } from 'react-router-dom';

import styles from './Breadcrumb.module.scss';

export const Breadcrumb: React.FC<{ headline: string }> = ({ headline }) => {
    return (
        <section
            className={`${styles.root} set-bg`}
            style={{ backgroundImage: `url(${breadcrumb})` }}>
            <div className="container">
                <div className={styles.text}>
                    <h2>{headline}</h2>
                    <div className={styles.option}>
                        <Link to="/">Home</Link>
                        <span>{headline}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
