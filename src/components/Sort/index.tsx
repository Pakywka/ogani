import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/filter/selectors';
import { setSortType } from '../../redux/filter/slice';
import { SortPropertyEnum } from '../../redux/filter/types';

import styles from './Sort.module.scss';

type SortType = {
    name: string;
    sortProperty: SortPropertyEnum;
};

type SortPopupProps = {
    value: SortType;
};

export const sortList: SortType[] = [
    { name: 'rating', sortProperty: SortPropertyEnum.RATING },
    { name: 'price up', sortProperty: SortPropertyEnum.PRICE_ASC },
    { name: 'price down', sortProperty: SortPropertyEnum.PRICE_DESC },
    { name: 'alphabet', sortProperty: SortPropertyEnum.NAME },
];

export const Sort: React.FC<SortPopupProps> = React.memo(({ value }) => {
    const { sortType } = useSelector(selectFilter);
    const dispatch = useDispatch();
    const sortRef = React.useRef<HTMLDivElement>(null);

    const [open, setOpen] = React.useState(false);
    const sortName = sortType.name;

    const onClickSortItem = (obj: SortType) => {
        dispatch(setSortType(obj));
        setOpen(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
                setOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div ref={sortRef} className={styles.root}>
            <div className={styles.label}>
                <span>Sort By</span>
                <span onClick={() => setOpen(!open)} className={styles.selectParametr}>
                    {sortName}
                </span>
            </div>
            {open && (
                <div className={styles.popup}>
                    <ul>
                        {sortList.map((obj, i) => (
                            <li
                                key={i}
                                onClick={() => onClickSortItem(obj)}
                                className={
                                    sortType.sortProperty === obj.sortProperty ? 'active' : ''
                                }>
                                {obj.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});
