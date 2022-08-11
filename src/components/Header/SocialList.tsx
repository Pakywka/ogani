import React from 'react';

const SocialList: React.FC = () => {
    return (
        <div style={{ display: `flex`, gap: `20px` }} className="social__list">
            <a href="#s">
                <i className="fa fa-facebook"></i>
            </a>
            <a href="#s">
                <i className="fa fa-twitter"></i>
            </a>
            <a href="#s">
                <i className="fa fa-linkedin"></i>
            </a>
            <a href="#s">
                <i className="fa fa-pinterest-p"></i>
            </a>
        </div>
    );
};

export default SocialList;
