import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from '../../../../services/Auth';

import styles from './PreLogin.module.scss';

const PreLogin: FC = () => {
    const [logout, { isLoading }] = useLogoutMutation();
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
                    <button onClick={logout} className="primary-btn">
                        Logout
                    </button>
                </div>
            </div>{' '}
        </div>
    );
};

export default PreLogin;
