import React, { useCallback, useState } from 'react';
import { useRef } from 'react';
import searchIcon from './search.svg';
import searchClose from './close.svg';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux/filterSlice';
import styles from './Search.module.scss';


const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);  
    
    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
        }, 250 ),
        [],
    );

    const onChangeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <form className={styles.search}>
            <input ref={inputRef} onChange={(event) => onChangeValue(event)} value={value} className={styles.search__input} type="text"/>
            {!value && (
                <button className={styles.search__button}>
                    <img className={styles.search__icon} src={searchIcon} alt="Иконка поиска"/>
                </button>
            )}
            {value && (
                <button onClick={onClickClear} className={styles.search__button}>
                    <img className={styles.search__icon} src={searchClose} alt="Сброс поискового запроса"/>
                </button>
            )}
        </form>
    );
}

export default Search;