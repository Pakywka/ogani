import React from 'react';
import BreadcrumbPost from '../../components/Breadcrumb/BreadcrumbPost';
import RelatedBlog from './RelatedBlog';
import blog_img from '../../img/blog/details/details-pic.jpg';
import author_img from '../../img/blog/details/details-author.jpg';
import { RecentNews } from '../../components';

const BlogDetails: React.FC = () => {
    return (
        <div className="blogDetails">
            <BreadcrumbPost
                headline="The Moment You Need To Remove Garlic From The Menu"
                subhead=""
                author="Bruce McMillan"
                date="June 02, 2022"
                count_comments={12}
            />
            <section className="blog-details spad">
                <div className="container">
                    <div className="flex">
                        <div className="blog__sidebar order-md-1 order-2">
                            <div className="blog__sidebar__search">
                                <form action="#">
                                    <input type="text" placeholder="Search..." />
                                    <button type="submit">
                                        <span className="icon_search"></span>
                                    </button>
                                </form>
                            </div>
                            <div className="blog__sidebar__item">
                                <h4>Categories</h4>
                                <ul>
                                    <li>
                                        <a href="#s">All</a>
                                    </li>
                                    <li>
                                        <a href="#s">Beauty (20)</a>
                                    </li>
                                    <li>
                                        <a href="#s">Food (5)</a>
                                    </li>
                                    <li>
                                        <a href="#s">Life Style (9)</a>
                                    </li>
                                    <li>
                                        <a href="#s">Travel (10)</a>
                                    </li>
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
                        <div className="blog-details__content order-md-1 order-1">
                            <div className="blog__details__text">
                                <img src={blog_img} alt="" />
                                <p>
                                    Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam
                                    vehicula elementum sed sit amet dui. Curabitur non nulla sit
                                    amet nisl tempus convallis quis ac lectus. Mauris blandit
                                    aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna
                                    justo, lacinia eget consectetur sed, convallis at tellus. Sed
                                    porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                                    Curabitur non nulla sit amet nisl tempus convallis quis ac
                                    lectus. Proin eget tortor risus. Donec rutrum congue leo eget
                                    malesuada. Curabitur non nulla sit amet nisl tempus convallis
                                    quis ac lectus. Donec sollicitudin molestie malesuada. Nulla
                                    quis lorem ut libero malesuada feugiat. Curabitur arcu erat,
                                    accumsan id imperdiet et, porttitor at sem.
                                </p>
                                <h3>
                                    The corner window forms a place within a place that is a resting
                                    point within the large space.
                                </h3>
                                <p>
                                    The study area is located at the back with a view of the vast
                                    nature. Together with the other buildings, a congruent story has
                                    been managed in which the whole has a reinforcing effect on the
                                    components. The use of materials seeks connection to the main
                                    house, the adjacent stables
                                </p>
                            </div>
                            <div className="blog__details__content">
                                <div className="blog__details__author">
                                    <div className="blog__details__author__pic">
                                        <img src={author_img} alt="" />
                                    </div>
                                    <div className="blog__details__author__text">
                                        <h6>Michael Scofield</h6>
                                        <span>Admin</span>
                                    </div>
                                </div>

                                <div className="blog__details__widget">
                                    <ul>
                                        <li>
                                            <span>Categories:</span> Food
                                        </li>
                                        <li>
                                            <span>Tags:</span> All, Trending, Cooking, Healthy Food,
                                            Life Style
                                        </li>
                                    </ul>
                                    <div className="blog__details__social">
                                        <a href="#s">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a href="#s">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a href="#s">
                                            <i className="fa fa-google-plus"></i>
                                        </a>
                                        <a href="#s">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <a href="#s">
                                            <i className="fa fa-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RelatedBlog />
        </div>
    );
};

export default BlogDetails;
