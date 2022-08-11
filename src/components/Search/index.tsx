import React from 'react';
import debounce from 'lodash.debounce';
import { useSelector } from 'react-redux';

import styles from './Search.module.scss';
import { ProductItem } from '..';
import { useAppDispatch } from '../../redux/store';
import SkeletonSearch from './SkeletonSearch';
import { selectFilter } from '../../redux/filter/selectors';
import { setSearchValue } from '../../redux/filter/slice';
import { selectProducts } from '../../redux/products/selectors';
import { fetchProducts } from '../../redux/products/asyncActions';

export const Search: React.FC = () => {
    const dispatch = useAppDispatch();
    const { searchValue } = useSelector(selectFilter);
    const { items, status } = useSelector(selectProducts);

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
        <div className={styles.search} ref={searchRef}>
            <input
                ref={inputRef}
                onClick={() => setOpen(true)}
                value={value}
                onChange={onChangeInput}
                type="text"
                placeholder="What do you need?"
            />
            <button className={`${styles.searchBtn} primary-btn`}>Search</button>
            {value && (
                <>
                    <svg
                        onClick={onClickClear}
                        className={styles.clearIcon}
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                    </svg>
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
