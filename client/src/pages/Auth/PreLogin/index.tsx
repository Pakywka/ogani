import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './PreLogin.module.scss';

const PreLogin: FC = () => {
    return (
        <div className="container">
            {' '}
            <div className={styles.root}>
                <div className={styles.content}>
                    <h2 className={styles.headline}>Login to your personal account</h2>
                    <p>To make purchases, as well as add products to favorites</p>
                    <Link to="/login" className="primary-btn">
                        Login create an account
                    </Link>
                    or
                    <Link to="/auth" className="primary-btn">
                        Create an account
                    </Link>
                </div>
            </div>{' '}
        </div>
    );
};

export default PreLogin;
