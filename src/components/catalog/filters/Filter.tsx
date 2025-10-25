import CheckboxFilterBlock from './Checkbox/CheckboxFilterBlock';
import styles from './Filter.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getFiltersValue, setSelectedFilters } from '@/redux/filterSlice';
import { VARIANTS } from '@/constants/variants';
import { FilterKey } from '@/types/filterTypes';

function Filter({ isOpen }: { isOpen: boolean }) {
    const dispatch = useAppDispatch();
    const { selected } = useAppSelector((state) => getFiltersValue(state));

    const handleTypeChange = (value: string, checked: boolean, key: FilterKey ) => {
        const checkedProducts = checked ? [...selected[key], value] : selected[key].filter((v) => v !== value);
        dispatch(setSelectedFilters({ key, values: checkedProducts }));
    }

    return(
        <div className={`${styles.filter} ${isOpen ? styles.active : ''}`}>
            <div className={styles.filter__item}> 
                <CheckboxFilterBlock title="Тип мотоцикла" headers={VARIANTS.typesMoto} typesChecked={selected.typesChecked} handleCheckboxChange={(value, checked) => handleTypeChange(value, checked, FilterKey.TYPES)} />
            </div>
            <div className={styles.filter__item}>
                <CheckboxFilterBlock title="Бренд" headers={VARIANTS.brands} typesChecked={selected.brandsChecked} handleCheckboxChange={(value, checked) =>
                    handleTypeChange(value, checked, FilterKey.BRANDS)
                } />
            </div>
        </div>
    );
}

export default Filter;