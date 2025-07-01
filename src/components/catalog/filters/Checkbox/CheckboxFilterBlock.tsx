import styles from './CheckboxFilterBlock.module.scss';

interface CheckboxFilterBlockProps {
    variants: string[];
    children: React.ReactNode;
    selectedValues: string[];
    onChange: (value: string, checked: boolean) => void;
}

export default function CheckboxFilterBlock ({variants, children, selectedValues, onChange} : CheckboxFilterBlockProps) {
    return (
        <div className={styles.checkboxBlock}> 
            <h5 className={styles.checkboxBlock__title}>{children}</h5>
            <ul className={styles.checkboxBlock__list}>
                {
                    variants.map((variant, i:number) => (
                        <li className={styles.checkboxBlock__item} key={i}> 
                            <label>
                                <input 
                                    className={styles.checkboxBlock__input} 
                                    type="checkbox" 
                                    checked={selectedValues.includes(variant)}
                                    onChange={(e) => onChange(variant, e.target.checked)}
                                />
                                <span className={styles.checkboxBlock__custom}></span>
                                <span className={styles.checkboxBlock__name}>{variant}</span>
                            </label>
                        </li>
                    ))
                }
                {/* <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Спортивный</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Дорожный</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Чоппер</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Туристический</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Эндуро</span>
                    </label>
                </li>
                <li className="checkbox-block__item"> 
                    <label className="checkbox">
                    <input className="checkbox__input" type="checkbox"/><span className="checkbox__custom custom-checkbox"></span><span className="checkbox__name">Питбайк</span>
                    </label>
                </li> */}
            </ul>
        </div>
    );
}