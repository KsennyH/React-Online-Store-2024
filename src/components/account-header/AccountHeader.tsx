import { Logotype } from '@/shared/ui';
import styles from '@/app/layout/HeaderTemplate/Header/Header.module.scss';

function AccountHeader() {

    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className="container">
                    <div className={styles.inner}>
                        <div className={styles.logo}>   
                            <Logotype />
                        </div>
                        <div className={styles.actions}>
                            <div className={styles.form}>
                                <div className={styles.userActions}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AccountHeader;