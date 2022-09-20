import React from 'react';
import styles from './BlogItem.module.scss';

type BlogItemProps = {
    pic: string;
    headline: string;
};

const BlogItem: React.FC<BlogItemProps> = ({ pic, headline }) => {
    return (
        <div className={styles.root}>
            <div className={styles.pic}>
                <img src={require(`../../assets/img/blog/blog-${pic}.jpg`)} alt="" />{' '}
            </div>
            <div className={styles.text}>
                <div className={styles.dateAndComments}>
                    <span className="button-icon">
                        <svg
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            x="0px"
                            y="0px"
                            viewBox="0 0 490 490">
                            <path
                                fill="hsl(0, 0%, 70%)"
                                d="M404.465,23.677h-53.131V0H330.03v23.677h-74.378V0h-21.304v23.677h-74.373V0h-21.304v23.677H85.535
	c-5.883,0-10.652,4.769-10.652,10.652v445.019c0,5.883,4.769,10.652,10.652,10.652h318.93c5.883,0,10.652-4.769,10.652-10.652
	V34.329C415.117,28.446,410.348,23.677,404.465,23.677z M138.671,44.981v23.681h21.304V44.981h74.373v23.681h21.304V44.981h74.378
	v23.681h21.304V44.981h42.479v74.914H96.187V44.981H138.671z M96.187,468.696V141.199h297.626v327.497H96.187z"
                            />
                        </svg>{' '}
                        May 4, 2019
                    </span>
                    <span className="button-icon">
                        {' '}
                        <svg
                            width="16px"
                            height="16px"
                            viewBox="0 0 16 16"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill="hsl(0, 0%, 70%)"
                                d="M3 11.2c0 0.1 0 0.1 0 0 0 0.1 0 0.1 0 0 0 0 0 0 0 0z"></path>
                            <path
                                fill="hsl(0, 0%, 70%)"
                                d="M8.3 1c-4.4 0-8.3 2.6-8.3 5.6 0 2 1.1 3.7 3 4.7 0 0 0 0 0 0s0 0.1 0 0.1c-0.1 1.3-0.9 1.7-0.9 1.7l-1.8 0.9h2c2.5 0 4.3-1.1 5.1-1.9 0.3 0 0.5 0 0.8 0 4.3 0 7.8-2.5 7.8-5.6s-3.4-5.5-7.7-5.5zM8.2 11.1c-0.3 0-0.7 0-0.9 0h-0.3l-0.2 0.2c-0.5 0.5-1.6 1.4-3.3 1.7 0.3-0.5 0.5-1.1 0.5-2v-0.3l-0.3-0.1c-1.8-0.9-2.7-2.3-2.7-4 0-2.4 3.5-4.6 7.3-4.6 3.7 0 6.7 2 6.7 4.6 0 2.4-3.1 4.5-6.8 4.5z"></path>
                        </svg>{' '}
                        5
                    </span>
                </div>
                <h5>
                    <a href="#s">{headline}</a>
                </h5>
                <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam
                    quaerat{' '}
                </p>
                <a href="#s" className={styles.btn}>
                    READ MORE <span className="arrow_right"></span>
                </a>
            </div>
        </div>
    );
};

export default BlogItem;
