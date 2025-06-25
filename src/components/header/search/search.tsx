import React, { useCallback, useState } from 'react';
import { useRef } from 'react';
import searchIcon from './search.svg';
import searchClose from './close.svg';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../../redux/filterSlice';


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
        <form className="search-form" action="/">
            <input ref={inputRef} onChange={(event) => onChangeValue(event)} value={value} className="search-form__input" type="text"/>
            {!value && (
                <button className="search-form__button">
                    <img className="search-form__icon" src={searchIcon} alt="Logo"/>
                </button>
            )}
            {value && (
                <button onClick={onClickClear} className="search-form__button">
                    <img className="search-form__icon" src={searchClose} alt="Logo"/>
                </button>
            )}
        </form>
    );
}

export default Search;