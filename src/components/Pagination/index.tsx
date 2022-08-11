import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setCurrentPage } from '../../redux/filter/slice';

import styles from './Pagination.module.scss';

export const Pagination: React.FC = () => {
    const { currentPage } = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage - 1}
            previousLabel="<"
        />
    );
};
