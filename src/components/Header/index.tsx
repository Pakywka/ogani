import React from 'react';

import styles from './Header.module.scss';

import HeaderMenu from './HeaderMenu';
import HamburgerMenu from './HamburgerMenu';
import { useSelector } from 'react-redux';
import { selectMenu } from '../../store/hamburgerMenu/selectors';
import { useAppDispatch } from '../../store/hooks';
import { setOpen } from '../../store/hamburgerMenu/slice';

const Header: React.FC = () => {
    const { open } = useSelector(selectMenu);
    const dispatch = useAppDispatch();

    const openMenu = () => dispatch(setOpen(!open));

    return (
        <header className={styles.root}>
            {open && (
                <>
                    <div onClick={openMenu} className={styles.overlay}></div>
                    <HamburgerMenu />
                </>
            )}
            <>
                <HeaderMenu openMenu={openMenu} />
            </>
        </header>
    );
};
export default Header;
