import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../store/filter/selectors';
import styles from './Skeleton.module.scss';

export const Skeleton = () => {
    const { viewType } = useSelector(selectFilter);

    if (viewType === 'view-tile') {
        return (
            <ContentLoader
                className={styles.root}
                speed={2}
                width={270}
                height={334}
                viewBox="0 0 270 336"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect className={styles.pic} x="0" y="0" rx="0" ry="0" width="270" height="270" />
                <rect x="72" y="282" rx="0" ry="0" width="120" height="19" />
                <rect x="102" y="307" rx="0" ry="0" width="60" height="22" />
            </ContentLoader>
        );
    } else if (viewType === 'view-simple') {
        return (
            <ContentLoader
                speed={2}
                width={855}
                height={120}
                viewBox="0 0 855 120"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb">
                <rect x="0" y="0" rx="0" ry="0" width="120" height="120" />
                <rect x="146" y="0" rx="0" ry="0" width="200" height="16" />
                <rect x="722" y="0" rx="0" ry="0" width="133" height="18" />
                <rect x="722" y="30" rx="0" ry="0" width="133" height="46" />
            </ContentLoader>
        );
    }

    return <></>;
};
