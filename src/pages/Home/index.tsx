import React from 'react';
import { Link } from 'react-router-dom';
import { Skeleton, ProductItem } from '../../components';
import Categories from '../../components/Categories';
import styles from './Home.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { fetchProducts } from '../../store/products/asyncActions';
import BlogItem from '../../components/BlogItem';
import { CategorySlider } from '../../components/CategorySlider';
import { OfferDelivery } from '../../components/OfferDelivery';
import { useAppSelector } from '../../store/hooks';

const Home: React.FC = () => {
    const dispatch = useAppDispatch();

    const { items, status } = useAppSelector((state) => state.products);
    const { categoryType } = useAppSelector((state) => state.filter);

    React.useEffect(() => {
        const category = categoryType !== 'All' ? categoryType : '';

        dispatch(
            fetchProducts({
                category,
            }),
        );
    }, [categoryType]);

    const products = items.map((item, i) => <ProductItem {...item} key={i} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className={styles.root}>
            <div className={styles.bannerHead}>
                <div className={styles.banner__content}>
                    <span>FRUIT FRESH</span>
                    <h2>Vegetable 100% Organic</h2>
                    <p>Free Pickup and Delivery Available</p>
                    <Link to="/shop" className="primary-btn">
                        shop now
                    </Link>
                </div>
            </div>
            <CategorySlider />
            <OfferDelivery />
            <section className={styles.featured}>
                <h3 className="section-title">Recommend to buy</h3>
                <Categories />
                <div className={styles.productItems}>
                    {status === 'loading' ? skeletons : products}
                </div>
            </section>
            <div className={styles.banners}>
                <Link to="/shop" className={styles.banner}></Link>
                <Link to="/shop" className={styles.banner}></Link>
            </div>
            <div className={styles.fromBlog}>
                <h3 className="section-title">From The Blog</h3>
                <div className={styles.blogItems}>
                    <BlogItem pic="1" headline="Cooking tips make cooking simple" />
                    <BlogItem pic="2" headline="6 ways to prepare breakfast for 30" />
                    <BlogItem pic="3" headline="Visit the clean farm in the US" />
                </div>
            </div>
        </div>
    );
};

export default Home;
