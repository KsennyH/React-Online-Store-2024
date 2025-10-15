import CheckboxFilterBlock from './Checkbox/CheckboxFilterBlock';
import styles from './Filter.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { FilterKey, getFiltersValue, setSelectedFilters } from '@/redux/filterSlice';
import { VARIANTS } from '@/constants/variants';

function Filter() {
    const dispatch = useAppDispatch();
    const { selected } = useAppSelector((state) => getFiltersValue(state));

    const handleTypeChange = (value: string, checked: boolean, key: FilterKey ) => {
        const checkedProducts = checked ? [...selected[key], value] : selected[key].filter((v) => v !== value);
        dispatch(setSelectedFilters({ key, values: checkedProducts }));
    }

    return(
        <div className={styles.filter}>
            <div className={styles.filter__item}> 
                <CheckboxFilterBlock title="Тип мотоцикла" headers={VARIANTS.typesMoto} typesChecked={selected.typesChecked} handleCheckboxChange={(value, checked) => handleTypeChange(value, checked, FilterKey.TYPES)} />
            </div>
            <div className={styles.filter__item}>
                <CheckboxFilterBlock title="Бренд" headers={VARIANTS.brands} typesChecked={selected.brandsChecked} handleCheckboxChange={(value, checked) =>
                    handleTypeChange(value, checked, FilterKey.BRANDS)
                } />
            </div>
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
        </div>
    );
}

export default Filter;