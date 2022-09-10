import React, { Fragment } from 'react';

import styles from './Header.module.scss';

import HeaderMenu from './HeaderMenu';
import HamburgerMenu from './HamburgerMenu';
import { useSelector } from 'react-redux';
import { selectMenu } from '../../redux/hamburgerMenu/selectors';
import { useAppDispatch } from '../../redux/hooks';
import { setOpen } from '../../redux/hamburgerMenu/slice';

export const Header: React.FC = () => {
    const { open } = useSelector(selectMenu);
    const dispatch = useAppDispatch();

    const openMenu = () => dispatch(setOpen(!open));

    return (
        <header className={styles.root}>
            {open && (
                <Fragment>
                    <div onClick={openMenu} className={styles.overlay}></div>
                    <HamburgerMenu />
                </Fragment>
            )}
            <>
                <HeaderMenu openMenu={openMenu} />
            </>
        </header>
    );
};
