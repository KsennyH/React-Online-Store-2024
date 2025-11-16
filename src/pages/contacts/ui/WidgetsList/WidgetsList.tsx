import { JSX } from 'react';
import styles from './WidgetsList.module.scss';
import { ContactWidget } from '@/shared/ui';
import { COMPANY_DATA } from '@/shared/constants';
export function WidgetsList(): JSX.Element {
    return(
        <div className={styles.wrapper}>
            <ContactWidget title="Телефон">
                <a href="tel:+74932134581">{COMPANY_DATA.phone}</a>
            </ContactWidget>
            <ContactWidget title="Email">
                <a href={`mailto:${COMPANY_DATA.email}`}>{COMPANY_DATA.email}</a>
            </ContactWidget>
            <ContactWidget title="Адрес">
                <p>{COMPANY_DATA.address}</p>
            </ContactWidget>
            <ContactWidget title="Время работы">
                { COMPANY_DATA.schedule.map(el => <p key={el}>{el}</p>) }
            </ContactWidget>
        </div>
    );
}