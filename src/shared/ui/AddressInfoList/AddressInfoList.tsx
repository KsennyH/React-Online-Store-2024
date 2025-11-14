import { JSX } from 'react';
import styles from './AddressInfoList.module.scss';
import { MailPlus, MapPinHouse, PhoneIncoming } from 'lucide-react';
import { COMPANY_DATA } from '@/shared/constants';

export function AddressInfoList(): JSX.Element {
    return (
        <ul className={styles.addressInformation}>
            <li className={styles.item}> 
                <a className={styles.addressInfoItem} href="/contacts">
                    <MapPinHouse color="#ffffff" size={24} />
                    <span className={styles.label}>{COMPANY_DATA.address}</span>
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.addressInfoItem} href="tel:84932134581">
                    <PhoneIncoming color="#ffffff" size={24} />
                    <span className={styles.label}>{COMPANY_DATA.phone}</span>
                </a>
            </li>
            <li className={styles.item}>
                <a className={styles.addressInfoItem} href={`mailto:${COMPANY_DATA.email}`}>
                    <MailPlus color="#ffffff" size={24} />
                    <span className={styles.label}>{COMPANY_DATA.email}</span>
                </a>
            </li>
        </ul>
    );
}