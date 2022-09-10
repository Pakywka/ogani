import React from 'react';
import styles from './BlogItem.module.scss';

type BlogItemProps = {
    pic: string;
    headline: string;
};

const BlogItem: React.FC<BlogItemProps> = ({ pic, headline }) => {
    const img = require(`../../../img/blog/blog-${pic}.jpg`);
    return (
        <div className={styles.blog__item}>
            <div className={styles.blog__item__pic}>
                <img src={img} alt="" />
            </div>
            <div className={styles.blog__item__text}>
                <div className={styles.dateAndComments}>
                    <span>
                        <i className="fa fa-calendar-o"></i> May 4, 2019
                    </span>
                    <span>
                        {' '}
                        <i className="fa fa-comment-o"></i> 5
                    </span>
                </div>
                <h5>
                    <a href="#s">{headline}</a>
                </h5>
                <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                    quaerat{' '}
                </p>
                <a href="#s" className={styles.blog__btn}>
                    READ MORE <span className="arrow_right"></span>
                </a>
            </div>
        </div>
    );
};

export default BlogItem;
