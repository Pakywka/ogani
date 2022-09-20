import React from 'react';

import styles from './CategoriesBlock.module.scss';

import { CategoriesList } from '..';
import { ModalOverlay } from '../ModalOverlay';

const CategoriesBlock: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div onClick={() => setOpen(!open)} className={styles.root}>
            <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#FFFFFF">
                <path
                    d="M5 6a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1V6zm0 7a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3zm7-7a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V6zm0 7a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3z"
                    fill="#FFFFFF"></path>
            </svg>
            <span>Catalog</span>
            {open && (
                <>
                    <ModalOverlay />
                    <div className="modal-wrapper">
                        <CategoriesList />
                    </div>
                </>
            )}
        </div>
    );
};

export default CategoriesBlock;
