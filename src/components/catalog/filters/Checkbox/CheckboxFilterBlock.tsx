import { Checkbox, Title } from '@/shared';
import styles from './CheckboxFilterBlock.module.scss';

interface CheckboxFilterBlockProps {
    headers: string[];
    title: string;
    typesChecked: string[];
    handleCheckboxChange: (value: string, checked: boolean, key: "typesChecked" | "brandsChecked" ) => void;
}

export default function CheckboxFilterBlock ({headers, title, typesChecked, handleCheckboxChange} : CheckboxFilterBlockProps) {

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