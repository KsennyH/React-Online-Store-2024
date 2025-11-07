import React, { useCallback, useState, useRef } from 'react';
import debounce from 'lodash.debounce';
import styles from './SearchComponent.module.scss';
import { searchValueAdded } from '@/redux/searchSlice';
import { useAppDispatch } from '@/app/store/store';
import SearchOpen from './search-open/SearchOpen';
import { useClickAway } from "@uidotdev/usehooks";
import { SearchCheck, X } from 'lucide-react';


const Search = () => {

    const dispatch = useAppDispatch();

    const [value, setValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);  
    const wrapperRef = useClickAway<HTMLDivElement>(() => { setIsOpen(false); });
    
    const updateSearchValue = useCallback(
        debounce((str: string) => {
            dispatch(searchValueAdded(str));
        }, 400 ),
        [],
    );

    const onChangeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
        if(value.trim().length > 2) {
            setIsOpen(true);
            updateSearchValue(value);
        } else {
            setIsOpen(false);
        }
    }

    const onClickClear = () => {
        dispatch(searchValueAdded(''));
        setValue('');
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className={styles.searchWrapper} ref={wrapperRef}>
            <div className={styles.search}>
                <input ref={inputRef} onChange={onChangeValue} value={value} className={styles.input} type="text" placeholder='Поиск'/>
                {!value && (
                    <div className={styles.button}>
                        <SearchCheck color="#ffffff" />
                    </div>
                )}
                {value && (
                    <button onClick={onClickClear} className={styles.button}>
                        <X color="#ffffff" />
                    </button>
                )}
            </div>
            {
                isOpen && <SearchOpen handleClick={() => setIsOpen(false)} />
            }
        </div>
    );
}

export default Search;