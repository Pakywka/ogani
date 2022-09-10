import React from 'react';
import BlogItem from './BlogItem';
import { Breadcrumb, RecentNews } from '../../components';
import styles from './Blog.module.scss';
import blog1 from '../../img/blog/blog-1.jpg';
import blog2 from '../../img/blog/blog-2.jpg';
import blog3 from '../../img/blog/blog-3.jpg';
import blog4 from '../../img/blog/blog-4.jpg';
import blog5 from '../../img/blog/blog-5.jpg';
import blog6 from '../../img/blog/blog-6.jpg';

const Blog: React.FC = () => {
    const categories: string[] = ['All', 'Beauty', 'Food', 'Life Style', 'Travel'];
    const [selected, setSelected] = React.useState<number>(0);

    return (
        <div className="blog-page">
            <Breadcrumb headline="Blog" />
            <section className="blog spad">
                <div className="container">
                    <div className="flex">
                        <div className="blog__sidebar">
                            <div className="blog__sidebar__search">
                                <form action="#s">
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <span className="icon_search"></span>
                                    </button>
                                </form>
                            </div>
                            <div className="blog__sidebar__item">
                                <h4>Categories</h4>
                                <ul>
                                    {categories.map((value, i) => (
                                        <li
                                            key={i}
                                            onClick={() => setSelected(i)}
                                            className={selected === i ? 'active' : ''}>
                                            {value}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="blog__sidebar__item">
                                <RecentNews />
                            </div>
                            <div className="blog__sidebar__item">
                                <h4>Search By</h4>
                                <div className="blog__sidebar__item__tags">
                                    <a href="#s">Apple</a>
                                    <a href="#s">Beauty</a>
                                    <a href="#s">Vegetables</a>
                                    <a href="#s">Fruit</a>
                                    <a href="#s">Healthy Food</a>
                                    <a href="#s">Lifestyle</a>
                                </div>
                            </div>
                        </div>

                        <div className={styles.blogitems__wrapper}>
                            <BlogItem pic={blog1} headline="Cooking tips make cooking simple" />
                            <BlogItem pic={blog2} headline="Cooking tips make cooking simple" />
                            <BlogItem pic={blog3} headline="Cooking tips make cooking simple" />
                            <BlogItem pic={blog4} headline="Cooking tips make cooking simple" />
                            <BlogItem pic={blog5} headline="Cooking tips make cooking simple" />
                            <BlogItem pic={blog6} headline="Cooking tips make cooking simple" />
                            <div className="col-lg-12">
                                <div className="product__pagination blog__pagination">
                                    <a href="#s">1</a>
                                    <a href="#s">2</a>
                                    <a href="#s">3</a>
                                    <a href="#s">
                                        <i className="fa fa-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
