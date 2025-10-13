import placeholderIcon from './placeholder.svg';
import phoneIcon from './phone.svg';
import mailIcon from './mail.svg';
import styles from './AddressInfo.module.scss';
import AddressInfoItem from './address-info-item/AddressInfoItem';

function AddressInfo() {
    return (
        <ul className={styles.addressInformation}>
            <li className={styles.addressInformation__item}> 
                <AddressInfoItem href="contacts.html" src={placeholderIcon} text="Иваново, ул. Сакко, 54" />
            </li>
            <li className={styles.addressInformation__item}>
                <AddressInfoItem href="tel:84932134581" src={phoneIcon} text="Тел. 8 (4932) 134-581" />
            </li>
            <li className={styles.addressInformation__item}>
                <AddressInfoItem href="mailto:motomirIvanovo@email.com" src={mailIcon} text="motomirIvanovo@email.com" />
            </li>
        </ul>
    );
}

export default AddressInfo;