import AddressInfo from "./address/AddressInfo";
import UserActions from "./actions/UserActions";
import DesktopNav from "./navigation/DesktopNav";
import SearchComponent from './search/SearchComponent';
import styles from './Header.module.scss';
import Logotype from "./logo/Logotype";
import MobileNav from "./mobile-nav/MobileNav";

function HeaderTemplate() {

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
                                <SearchComponent />
                                <div className={styles.userActions}>
                                    <UserActions />
                                </div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <AddressInfo />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}> 
                <div className="container"> 
                    <DesktopNav />
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default HeaderTemplate;