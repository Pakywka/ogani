import React from 'react';
import BlogItem from '../Blog/BlogItem';
import blog1 from '../../img/blog/blog-1.jpg';
import blog2 from '../../img/blog/blog-2.jpg';
import blog3 from '../../img/blog/blog-3.jpg';

const RelatedBlog: React.FC = () => {
    return (
        <section className="related-blog spad">
            <div className="container">
                <div className="section-title related-blog-title">
                    <h2>Post You May Like</h2>
                </div>
                <div className="posts__wrapper">
                    <BlogItem pic={blog1} headline="" />
                    <BlogItem pic={blog2} headline="" />
                    <BlogItem pic={blog3} headline="" />
                </div>
            </div>
        </section>
    );
};

export default RelatedBlog;
