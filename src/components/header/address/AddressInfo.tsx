import styles from './AddressInfo.module.scss';
import AddressInfoItem from './address-info-item/AddressInfoItem';
import { MailPlus, MapPinHouse, PhoneIncoming } from 'lucide-react';

function AddressInfo() {
    return (
        <ul className={styles.addressInformation}>
            <li className={styles.addressInformation__item}> 
                <AddressInfoItem href="contacts.html" text="Иваново, ул. Сакко, 54"><MapPinHouse color="#ffffff" size={24} /></AddressInfoItem>
            </li>
            <li className={styles.addressInformation__item}>
                <AddressInfoItem href="tel:84932134581" text="Тел. 8 (4932) 134-581"><PhoneIncoming color="#ffffff" size={24} /></AddressInfoItem>
            </li>
            <li className={styles.addressInformation__item}>
                <AddressInfoItem href="mailto:motomirIvanovo@email.com" text="motomirIvanovo@email.com"><MailPlus color="#ffffff" size={24} /></AddressInfoItem>
            </li>
        </ul>
    );
}

export default AddressInfo;