import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Languages.module.scss';
import languageImage from '../../../assets/img/language.png';
import { useAppDispatch } from '../../../store/hooks';
import { selectLanguage } from '../../../store/language/selectors';
import { setLanguage, setOpen } from '../../../store/language/slice';

const listLanguages: string[] = ['English', 'Spanish', 'Germany'];

const Languages: React.FC = () => {
    const { languageId, open } = useSelector(selectLanguage);
    const dispatch = useAppDispatch();

    const languageName = listLanguages[languageId];

    const onClickList = () => {
        dispatch(setOpen(!open));
    };

    const onChangeLanguage = (i: number) => {
        dispatch(setLanguage(i));
        setOpen(false);
    };

    return (
        <div onClick={onClickList} className={styles.root}>
            <img src={languageImage} alt="" />
            <div>{languageName}</div>
            <span className="arrow_carrot-down"></span>
            {open && (
                <ul>
                    {listLanguages.map((value, i) => (
                        <li
                            key={i}
                            onClick={() => onChangeLanguage(i)}
                            className={languageId === i ? 'active' : ''}>
                            {value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Languages;
