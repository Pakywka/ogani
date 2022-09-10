import React from 'react';
import breadcrumb from '../../img/breadcrumb.jpg';

type BreadcrumbPostProps = {
    headline: string;
    subhead: string;
    author: string;
    date: number | string;
    count_comments: number;
};

const BreadcrumbPost: React.FC<BreadcrumbPostProps> = ({
    headline,
    subhead,
    author,
    date,
    count_comments,
}) => {
    return (
        <section
            className="breadcrumb-section set-bg"
            style={{ backgroundImage: `url(${breadcrumb})` }}>
            <div className="container">
                <div className="breadcrumb__text">
                    <h2>{headline}</h2>
                    <div className="breadcrumb__option">
                        <span>{subhead}</span>
                        <ul>
                            <li>{author}</li>
                            <li>{date}</li>
                            <li>{count_comments} Comments</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BreadcrumbPost;
