import { useDispatch, useSelector } from 'react-redux';
import CheckboxFilterBlock from './Checkbox/CheckboxFilterBlock';
import styles from './Filter.module.scss';
import { RootState } from '@/redux/store';
import { setTypes } from '@/redux/filterSlice';

const typesMoto = ['Спортивный', 'Дорожный', 'Эндуро', 'Питбайк'];
const brands = ['Honda', 'Irbis', 'Bse', 'Rockot', 'Bmw', 'Kawasaki', 'Suzuki'];
function Filter() {
    const dispatch = useDispatch();
    const selectedTypes = useSelector((state: RootState) => state.filter.types);
    const handleTypeChange = (value: string, checked: boolean) => {
        const updated = checked ? [...selectedTypes, value] : selectedTypes.filter((v) => v !== value);
        dispatch(setTypes(updated));
    }
    return(
        <div className={styles.filter}>
            {/* <div className={styles.filter__item}>
            <div className="toggle-block"> 
                <h5 className="toggle-block__title filter-title">Цена (руб)</h5>
                <div className="toggle-block__body"> 
                <div className="toggle-block__inputs">
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="price-input-0" min="500" max="999999" placeholder="500"/>
                    </label>
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="price-input-1" min="500" max="999999" placeholder="999999"/>
                    </label>
                </div>
                <div className="toggle-block__range" id="price-slider"></div>
                </div>
            </div>
            </div> */}
            {/* <div className={styles.filter__item}>
            <div className="checkbox-block"> 
                <h5 className="checkbox-block__title filter-title">Техника</h5>
                <ul className="checkbox-block__list">
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Мотоциклы</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Мопеды</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Скутеры</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Квадроциклы</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Гидроциклы</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Снегоходы</span>
                    </label>
                </li>
                </ul>
            </div>
            </div> */}
            <div className={styles.filter__item}> 
                <CheckboxFilterBlock variants={typesMoto} selectedValues={selectedTypes} onChange={handleTypeChange}>Тип мотоцикла</CheckboxFilterBlock>
            </div>
            <div className={styles.filter__item}>
                {/* <CheckboxFilterBlock variants={brands}>Бренд</CheckboxFilterBlock> */}
            </div>
            {/* <div className={styles.filter__item}>
            <div className="toggle-block"> 
                <h5 className="toggle-block__title filter-title">Объём двигателя (куб. см)</h5>
                <div className="toggle-block__body"> 
                <div className="toggle-block__inputs">
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="size-input-0" min="50" max="1000" placeholder="50"/>
                    </label>
                    <label className="toggle-block__label">
                    <input className="toggle-block__input" type="number" id="size-input-1" min="50" max="1000" placeholder="1000"/>
                    </label>
                </div>
                <div className="toggle-block__range"></div>
                </div>
            </div>
            </div> */}
            {/* <div className={styles.filter__item}>
            <div className="radio-block"> 
                <h5 className="radio-block__title filter-title">Пробег (км)</h5>
                <ul className="radio-block__list"> 
                <li className="radio-block__item">
                    <label className="radio">
                    <input className="radio__input" name="mileage" type="radio"/><span className="radio__custom custom-radio"></span><span className="radio__name">С пробегом </span>
                    </label>
                </li>
                <li className="radio-block__item">
                    <label className="radio">
                    <input className="radio__input" name="mileage" type="radio"/><span className="radio__custom custom-radio"></span><span className="radio__name">Без пробега </span>
                    </label>
                </li>
                </ul>
            </div>
            </div> */}
            {/* <div className={styles.filter__btn}> 
                <button className="btn btn--small" type="submit">Показать</button>
            </div>
            <div className={styles.filter__reset}> 
                <button className={styles.filter__resetBtn}>Сбросить настройки</button>
            </div> */}
        </div>
    );
}

export default Filter;