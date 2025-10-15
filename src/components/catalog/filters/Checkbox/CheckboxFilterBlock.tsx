import Checkbox from '@/components/ui/checkbox/Checkbox';
import styles from './CheckboxFilterBlock.module.scss';

interface CheckboxFilterBlockProps {
    headers: string[];
    title: string;
    typesChecked: string[];
    handleCheckboxChange: (value: string, checked: boolean, type: string[]) => void;
}

export default function CheckboxFilterBlock ({headers, title, typesChecked, handleCheckboxChange} : CheckboxFilterBlockProps) {

    return (
        <div className={styles.checkboxBlock}> 
            <h5 className={styles.checkboxBlock__title}>{title}</h5>
            <ul className={styles.checkboxBlock__list}>
                {
                    headers.map((el, i:number) => (
                        <li className={styles.checkboxBlock__item} key={i}> 
                            <Checkbox name={el} checked={typesChecked.includes(el)} onChange={(checked) => handleCheckboxChange(el, checked, typesChecked)} />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}