import React from 'react';
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../utils/hooks/useAuth';

import styles from './Profile.module.scss';

export const Profile = () => {
    const auth = useAuth();
    const location = useLocation();

    return auth.user ? (
        <div className={styles.root}>
            <div className={styles.nav}>
                <ul>
                    <li>
                        <NavLink to="">Personal Area</NavLink>
                    </li>
                    <li>
                        <NavLink to="orders">Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="promocodes">Promocodes</NavLink>
                    </li>
                    <li>
                        <NavLink to="settings">Settings</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </div>
    ) : (
        <Navigate to="/prelogin" state={{ from: location }} />
    );
};
