import styles from './Filter.module.scss';
import { JSX } from 'react';
import { CHECKBOX_VARIANTS, FilterKey, getFiltersValue, setSelectedFilters } from '@/features/product/model';
import { CheckboxFilterBlock } from '../CheckboxFilterBlock/CheckboxFilterBlock';
import { useAppDispatch, useAppSelector } from '@/shared/lib';

export function Filter({ isOpen }: { isOpen: boolean }): JSX.Element {

    const dispatch = useAppDispatch();
    const { selected } = useAppSelector((state) => getFiltersValue(state));

    const handleTypeChange = (value: string, checked: boolean, key: FilterKey ) => {
        const checkedProducts = checked ? [...selected[key], value] : selected[key].filter((v: string) => v !== value);
        dispatch(setSelectedFilters({ key, values: checkedProducts }));
    }

    return(
        <div className={`${styles.filter} ${isOpen ? styles.active : ''}`}>
            <div className={styles.item}> 
                <CheckboxFilterBlock title="Тип мотоцикла" headers={CHECKBOX_VARIANTS.typesMoto} typesChecked={selected.typesChecked} handleCheckboxChange={(value, checked) => handleTypeChange(value, checked, FilterKey.TYPES)} />
            </div>
            <div className={styles.item}>
                <CheckboxFilterBlock title="Бренд" headers={CHECKBOX_VARIANTS.brands} typesChecked={selected.brandsChecked} handleCheckboxChange={(value, checked) =>
                    handleTypeChange(value, checked, FilterKey.BRANDS)
                } />
            </div>
        </div>
    );
}