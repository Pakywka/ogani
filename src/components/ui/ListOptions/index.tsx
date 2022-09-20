import React from 'react';
import { useSelector } from 'react-redux';

import styles from './ListOptions.module.scss';

import { selectFilter } from '../../../store/filter/selectors';
import { setViewType } from '../../../store/filter/slice';
import { ViewType } from '../../../store/filter/types';
import { useAppDispatch } from '../../../store/hooks';

export const ListOptions: React.FC = () => {
    const { viewType } = useSelector(selectFilter);
    const dispatch = useAppDispatch();

    const onChangeView = (obj: ViewType) => {
        dispatch(setViewType(obj));
    };

    return (
        <div className={styles.root}>
            <button className="button-icon" onClick={() => onChangeView('view-tile')}>
                <svg
                    className={viewType === 'view-tile' ? 'active' : ''}
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 278 278"
                    color="currentColor"
                    fill="hsl(0, 0%, 70%)">
                    <rect x="0" y="0" width="119.054" height="119.054" fill="currentColor" />
                    <rect x="158.946" y="0" width="119.054" height="119.054" fill="currentColor" />
                    <rect
                        x="158.946"
                        y="158.946"
                        width="119.054"
                        height="119.054"
                        fill="currentColor"
                    />
                    <rect x="0" y="158.946" width="119.054" height="119.054" fill="currentColor" />
                </svg>
            </button>
            <button className="button-icon" onClick={() => onChangeView('view-simple')}>
                <svg
                    className={viewType === 'view-simple' ? 'active' : ''}
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 489.7 489.7"
                    color="currentColor">
                    <path
                        fill="currentColor"
                        d="M52.7,134.75c29.1,0,52.7-23.7,52.7-52.7s-23.6-52.8-52.7-52.8S0,52.95,0,81.95S23.7,134.75,52.7,134.75z M52.7,53.75
           c15.6,0,28.2,12.7,28.2,28.2s-12.7,28.2-28.2,28.2s-28.2-12.7-28.2-28.2S37.2,53.75,52.7,53.75z "
                    />
                    <path
                        fill="currentColor"
                        d="M52.7,297.55c29.1,0,52.7-23.7,52.7-52.7s-23.6-52.7-52.7-52.7S0,215.75,0,244.85S23.7,297.55,52.7,297.55z M52.7,216.65
           c15.6,0,28.2,12.7,28.2,28.2s-12.7,28.2-28.2,28.2s-28.2-12.6-28.2-28.2S37.2,216.65,52.7,216.65z"
                    />
                    <path
                        fill="currentColor"
                        d="M52.7,460.45c29.1,0,52.7-23.7,52.7-52.7c0-29.1-23.7-52.7-52.7-52.7S0,378.75,0,407.75C0,436.75,23.7,460.45,52.7,460.45
           z M52.7,379.45c15.6,0,28.2,12.7,28.2,28.2c0,15.6-12.7,28.2-28.2,28.2s-28.2-12.7-28.2-28.2C24.5,392.15,37.2,379.45,52.7,379.45
           z"
                    />
                    <path
                        fill="currentColor"
                        d="M175.9,94.25h301.5c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H175.9c-6.8,0-12.3,5.5-12.3,12.3
           S169.1,94.25,175.9,94.25z"
                    />
                    <path
                        fill="currentColor"
                        d="M175.9,257.15h301.5c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H175.9c-6.8,0-12.3,5.5-12.3,12.3
           S169.1,257.15,175.9,257.15z"
                    />
                    <path
                        fill="currentColor"
                        d="M175.9,419.95h301.5c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3H175.9c-6.8,0-12.3,5.5-12.3,12.3
           S169.1,419.95,175.9,419.95z"
                    />
                </svg>
            </button>
        </div>
    );
};
