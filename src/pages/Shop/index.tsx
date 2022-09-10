import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
    Pagination,
    Sidebar,
    Breadcrumb,
    ProductItem,
    Sort,
    Options,
    Skeleton,
    sortList,
} from '../../components';
import { useAppDispatch } from '../../redux/hooks';
import { fetchProducts } from '../../redux/products/asyncActions';
import { SearchProductsParams } from '../../redux/products/types';
import DiscountItem from '../../components/ProductItem/DiscountItem';
import { fetchDiscountProducts } from '../../redux/discountProducts/asyncActions';
import { SwiperSlider } from '../../components/Swiper';
import styles from './Shop.module.scss';
import { setFilters } from '../../redux/filter/slice';
import { useAppSelector } from '../../redux/hooks';

const Shop: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    const { items, status } = useAppSelector((state) => state.products);
    const { discountItems } = useAppSelector((state) => state.discountProducts);
    const { categoryType, colorType, sizeType, sortType, viewType, currentPage, priceRange } =
        useAppSelector((state) => state.filter);

    const price = priceRange ? `${priceRange.minPrice}-${priceRange.maxPrice}` : '';

    const getProducts = async () => {
        const category = categoryType !== 'All' ? categoryType : '';
        const sortBy = sortType.sortProperty.replace('-', '');
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const color = colorType ? `${colorType}` : '';
        const size = sizeType ? `${sizeType}` : '';
        const limit = 4;

        dispatch(
            fetchProducts({
                category,
                sortBy,
                order,
                color,
                size,
                currentPage,
                limit,
                price,
            }),
        );
    };

    React.useEffect(() => {
        dispatch(fetchDiscountProducts());
    }, []);

    // Если изменили параметры и был первый рендер
    // React.useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({
    //             categoryType,
    //             sortProperty: sortType.sortProperty,
    //             colorType,
    //             sizeType,
    //             currentPage,
    //             price,
    //         });

    //         navigate(`?${queryString}`);
    //     }
    //     isMounted.current = true;
    // }, [categoryType, sortType.sortProperty, currentPage, colorType, sizeType, priceRange]);

    // // Если был первый рендер, то проверяем URl-параметры и сохраняем в редакс
    // React.useEffect(() => {
    //     const params = qs.parse(
    //         window.location.search.substring(1),
    //     ) as unknown as SearchProductsParams;

    //     const sortType = sortList.find((obj) => obj.sortProperty === params.sortBy);

    //     dispatch(setFilters({}));
    //     isSearch.current = true;
    // }, []);

    // Если был первый рендер, то запрашиваем продукты
    React.useEffect(() => {
        // if (!isSearch.current) {
        getProducts();
        // }

        // isSearch.current = false;
    }, [categoryType, sortType.sortProperty, currentPage, colorType, sizeType, priceRange]);

    const productDiscountElements = discountItems.map((obj, i: number) => (
        <DiscountItem key={i} {...obj} />
    ));
    const productElements = items.map((obj, i: number) => <ProductItem {...obj} key={i} />);
    const skeletonsForDiscount = [...new Array(3)].map((_, i: number) => <Skeleton key={i} />);
    const skeletons = [...new Array(6)].map((_, i: number) => <Skeleton key={i} />);

    return (
        <div className="container">
            <div className={styles.root}>
                <Sidebar />
                <div className={styles.content}>
                    <div className={styles.productDiscount}>
                        <h2 className="section-title">Sale Off</h2>
                        {status === 'error' ? (
                            <div>
                                <h2>Не удалось загрузить продукты</h2>
                                <p>Попробуйте повторить попытку позже</p>
                            </div>
                        ) : (
                            <div
                                className={
                                    status === 'loading'
                                        ? viewType.itemsClass
                                        : styles.discountItems
                                }>
                                {status === 'loading' ? (
                                    skeletonsForDiscount
                                ) : (
                                    <SwiperSlider
                                        slidesPerView={3}
                                        navigation={false}
                                        pagination={{ clickable: true }}
                                        direction={'horizontal'}
                                        rows={1}
                                        array={productDiscountElements}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                    <div className={styles.product__wrapper}>
                        <div className={styles.filter}>
                            <Sort value={sortType} />
                            <div className={styles.filter__found}>
                                <h6>
                                    <span>{productElements.length}</span> Products found
                                </h6>
                            </div>
                            <div className={styles.filter__option}>
                                <Options />
                            </div>
                        </div>
                        {status === 'error' ? (
                            <div>
                                <h2>Не удалось загрузить продукты</h2>
                                <p>Попробуйте повторить попытку позже</p>
                            </div>
                        ) : (
                            <div className={`${styles.productItems} ${viewType.itemsClass}`}>
                                {status === 'loading' ? skeletons : productElements}
                            </div>
                        )}
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
