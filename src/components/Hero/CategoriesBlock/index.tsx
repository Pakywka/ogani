import React from 'react';

import styles from './CategoriesBlock.module.scss';

import { CategoriesList } from '../..';

const CategoriesBlock: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <div onClick={() => setOpen(!open)} className={styles.root}>
            <i className="fa fa-bars"></i>
            <span>All departments</span>
            {open && <CategoriesList />}
        </div>
    );
};

export default CategoriesBlock;
