import { Checkbox, Title } from '@/shared/ui';
import styles from './CheckboxFilterBlock.module.scss';
import { CheckboxFilterBlockProps } from '@/features/product/model';
import { JSX } from 'react';

export function CheckboxFilterBlock ({ headers, title, typesChecked, handleCheckboxChange } : CheckboxFilterBlockProps): JSX.Element {

    return (
        <div className={styles.checkboxBlock}>
            <div className={styles.title}>
                <Title tag='h4'>{title}</Title> 
            </div>
            <ul className={styles.list}>
                {
                    headers.map((el, i:number) => (
                        <li className={styles.item} key={i}> 
                            <Checkbox name={el} checked={typesChecked.includes(el)} onChange={(checked) => handleCheckboxChange(el, checked, "typesChecked")} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}