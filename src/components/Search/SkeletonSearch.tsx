import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonSearch = () => {
    return (
        <ContentLoader
            speed={2}
            width={568}
            height={60}
            viewBox="0 0 568 60"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="0" ry="0" width="120" height="120" />
            <rect x="146" y="0" rx="0" ry="0" width="200" height="16" />
            <rect x="400" y="23" rx="0" ry="0" width="133" height="18" />
            <rect x="450" y="8" rx="0" ry="0" width="133" height="46" />
        </ContentLoader>
    );
};

export default SkeletonSearch;
