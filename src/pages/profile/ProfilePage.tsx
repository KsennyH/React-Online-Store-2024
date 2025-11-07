import Title from '@/components/ui/title/Title';
import styles from './ProfilePage.module.scss';
import AccountAside from '@/components/account-aside/AccountAside';

function ProfilePage() {
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;