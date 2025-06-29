import placeholderIcon from './placeholder.svg';
import phoneIcon from './phone.svg';
import mailIcon from './mail.svg';
import styles from './AddressInfo.module.scss';

function AddressInfo() {
    return (
        <div className={styles.addressInformation}> 
            <ul className={styles.addressInformation__list}>
                <li className={styles.addressInformation__item}> 
                    <a className={styles.addressInformation__link} href="contacts.html">
                        <img className={styles.addressInformation__icon} src={placeholderIcon} alt="Иконка адрес"/>
                        <span className={styles.addressInformation__label}>Иваново, ул. Сакко, 54</span>
                    </a>
                </li>
                <li className={styles.addressInformation__item}>
                    <a className={styles.addressInformation__link} href="tel:84932134581">
                        <img className={styles.addressInformation__icon} src={phoneIcon} alt="Иконка телефон"/>
                        <span className={styles.addressInformation__label}>Тел. 8 (4932) 134-581</span>
                    </a>
                </li>
                <li className={styles.addressInformation__item}>
                    <a className={styles.addressInformation__link} href="mailto:motomirIvanovo@email.com">
                        <img className={styles.addressInformation__icon} src={mailIcon} alt="Иконка почта"/>
                        <span className={styles.addressInformation__label}>motomirIvanovo@email.com</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default AddressInfo;