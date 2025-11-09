import UserActions from '../header/actions/UserActions';
import AddressInfo from '../header/address/AddressInfo';
import Logotype from '../header/logo/Logotype';
import styles from './../header/Header.module.scss';

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
                                    <UserActions />
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