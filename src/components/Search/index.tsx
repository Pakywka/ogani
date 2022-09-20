import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';
import { ProductItem } from '..';
import { useAppDispatch } from '../../store/hooks';
import SkeletonSearch from './SkeletonSearch';
import { setSearchValue } from '../../store/filter/slice';
import { fetchProducts } from '../../store/products/asyncActions';
import { useAppSelector } from '../../store/hooks';

export const Search: React.FC = () => {
    const dispatch = useAppDispatch();
    const { searchValue } = useAppSelector((state) => state.filter);
    const { items, status } = useAppSelector((state) => state.products);

    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState<string>('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const searchRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const search = searchValue ? searchValue : '';

        dispatch(fetchProducts({ search }));
    }, [searchValue]);

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current?.focus();
    };

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
        }, 300),
        [],
    );

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !event.composedPath().includes(searchRef.current)) {
                setOpen(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    const products = items.map((obj, i) => (
        <li key={i}>
            <ProductItem key={obj.id} {...obj} />
        </li>
    ));
    const skeletons = [...new Array(6)].map((_, i: number) => <SkeletonSearch key={i} />);

    return (
        <div className={styles.root} ref={searchRef}>
            <input
                ref={inputRef}
                onClick={() => setOpen(true)}
                value={value}
                onChange={onChangeInput}
                type="text"
                placeholder="What do you need?"
            />
            <button className={styles.searchBtn}>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#50b946"
                    className="search-form__search-icon">
                    <path
                        d="M10.526 3a7.526 7.526 0 017.527 7.526 7.485 7.485 0 01-.7 3.156l3.29 4.429a1.81 1.81 0 01-2.532 2.532l-4.427-3.292a7.488 7.488 0 01-3.158.701 7.526 7.526 0 110-15.052zm0 12.744a5.217 5.217 0 100-10.436 5.218 5.218 0 000 10.436z"
                        fill="#50b946"></path>
                </svg>
            </button>
            {value && (
                <>
                    <button onClick={onClickClear} className={styles.clearIcon}>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#B6BAC2">
                            <path
                                d="M5 5l14 14M5 19L19 5"
                                stroke="#B6BAC2"
                                stroke-width="3"
                                stroke-linecap="round"></path>
                        </svg>
                    </button>

                    {open && (
                        <ul className={`${styles.searchProductItems} search-product-items`}>
                            {status === 'loading' ? skeletons : products}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};
