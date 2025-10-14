import styles from './CheckboxFilterBlock.module.scss';

interface CheckboxFilterBlockProps {
    headers: string[];
    title: string;
    typesChecked: string[];
    onChange: (value: string, checked: boolean) => void;
}

export default function CheckboxFilterBlock ({headers, title, typesChecked, onChange} : CheckboxFilterBlockProps) {
    return (
        <div className={styles.checkboxBlock}> 
            <h5 className={styles.checkboxBlock__title}>{title}</h5>
            <ul className={styles.checkboxBlock__list}>
                {
                    headers.map((el, i:number) => (
                        <li className={styles.checkboxBlock__item} key={i}> 
                            <label>
                                <input 
                                    className={styles.checkboxBlock__input} 
                                    type="checkbox" 
                                    checked={typesChecked.includes(el)}
                                    onChange={(e) => onChange(el, e.target.checked)}
                                />
                                <span className={styles.checkboxBlock__custom}></span>
                                <span className={styles.checkboxBlock__name}>{el}</span>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}