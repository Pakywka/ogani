import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from '../redux/filter/selectors';
import { setViewType } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';

type OptionType = {
    optionClass: string;
    itemsClass: string;
};
export const optionData: OptionType[] = [
    { optionClass: 'icon_grid-2x2', itemsClass: 'view-tile' },
    { optionClass: 'icon_ul', itemsClass: 'view-simple' },
];

export const Options: React.FC = () => {
    const { viewType } = useSelector(selectFilter);
    const dispatch = useAppDispatch();

    const onChangeView = (obj: OptionType) => {
        dispatch(setViewType(obj));
    };

    const optionItems = optionData.map((OptionType, i) => (
        <button
            key={i}
            disabled={viewType.itemsClass === OptionType.itemsClass}
            onClick={() => onChangeView(OptionType)}
            className={`view-btn ${OptionType.optionClass} ${
                viewType.itemsClass === OptionType.itemsClass ? 'active' : ''
            }`}></button>
    ));

    return <>{optionItems}</>;
};
