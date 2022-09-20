import React from 'react';

import { Pagination, Sidebar, ProductItem, Sort, Skeleton, ListOptions } from '../../components';
import { useAppDispatch } from '../../store/hooks';
import { fetchProducts } from '../../store/products/asyncActions';
import DiscountItem from '../../components/ProductItem/DiscountItem';
import { fetchDiscountProducts } from '../../store/discountProducts/asyncActions';
import { SwiperSlider } from '../../components/Swiper';
import styles from './Shop.module.scss';
import { useAppSelector } from '../../store/hooks';

const Shop: React.FC = () => {
    const dispatch = useAppDispatch();

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

    React.useEffect(() => {
        getProducts();
    }, [categoryType, sortType.sortProperty, currentPage, colorType, sizeType, priceRange]);

    const productDiscountElements = discountItems.map((obj: any, i: number) => (
        <DiscountItem key={i} {...obj} />
    ));
    const productElements = items.map((obj: any, i: number) => <ProductItem {...obj} key={i} />);
    const skeletonsForDiscount = [...new Array(3)].map((_, i: number) => <Skeleton key={i} />);
    const skeletons = [...new Array(6)].map((_, i: number) => <Skeleton key={i} />);

    return (
        <div className={styles.root}>
            <Sidebar />
            <div className={styles.content}>
                <div className={styles.productDiscount}>
                    <h3 className="section-title">Sale Off</h3>
                    {status === 'error' ? (
                        <div>
                            <h2>Не удалось загрузить продукты</h2>
                            <p>Попробуйте повторить попытку позже</p>
                        </div>
                    ) : (
                        <div className={status === 'loading' ? viewType : styles.discountItems}>
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

                        <ListOptions />
                    </div>
                    {status === 'error' ? (
                        <div>
                            <h2>Не удалось загрузить продукты</h2>
                            <p>Попробуйте повторить попытку позже</p>
                        </div>
                    ) : (
                        <div className={`${styles.productItems} ${viewType}`}>
                            {status === 'loading' ? skeletons : productElements}
                        </div>
                    )}
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default Shop;
