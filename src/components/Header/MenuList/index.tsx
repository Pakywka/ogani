import React from 'react';
import { NavLink } from 'react-router-dom';
import { setOpen } from '../../../redux/hamburgerMenu/slice';
import { useAppDispatch } from '../../../redux/hooks';

import styles from './MenuList.module.scss';

type MenuItem = {
    namePage: string;
    path: string;
};

const menuList: MenuItem[] = [
    { namePage: 'Home', path: '/' },
    { namePage: 'Shop', path: '/shop' },
    { namePage: 'Blog', path: '/blog' },
    { namePage: 'Contact', path: '/contact' },
];

const MenuList: React.FC = () => {
    const dispatch = useAppDispatch();

    const closeMenu = () => {
        dispatch(setOpen(false));
    };

    return (
        <ul className={styles.root}>
            {menuList.map((obj, i) => (
                <li onClick={closeMenu} key={i} className={styles.item}>
                    <NavLink className={styles.link} to={obj.path}>
                        {obj.namePage}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default MenuList;
