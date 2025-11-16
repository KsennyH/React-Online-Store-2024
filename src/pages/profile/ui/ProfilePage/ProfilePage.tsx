import { ErrorMessage, Title } from '@/shared/ui';
import styles from './ProfilePage.module.scss';
import AccountAside from '@/components/account-aside/AccountAside';
import { JSX } from 'react';

export function ProfilePage(): JSX.Element {
    return (
        <div className={styles.profile}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.aside}>
                       <AccountAside />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            <Title tag='h1'>Личные данные</Title>
                            <ErrorMessage text='Страница в разработке, заходите позже'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}