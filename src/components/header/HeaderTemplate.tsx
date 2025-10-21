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
            <div className={styles.header__top}>
                <div className="container">
                    <div className={styles.header__inner}>
                        <div className={styles.header__logo}>   
                            <Logotype />
                        </div>
                        <div className={styles.header__actions}>
                            <div className={styles.header__form}>
                                <SearchComponent />
                                <div className={styles.header__userActions}>
                                    <UserActions />
                                </div>
                            </div>
                        </div>
                        <div className={styles.header__info}>
                            <AddressInfo />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.header__bottom}> 
                <div className="container"> 
                    <DesktopNav />
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default HeaderTemplate;