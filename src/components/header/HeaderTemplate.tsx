import AddressInfo from "./address/AddressInfo";
import UserActions from "./actions/UserActions";
import Navigation from "./navigation/navigation";
import Search from './search/search';
import styles from './Header.module.scss';
import Logotype from "./logo/Logotype";

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
                                <Search />
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
                    <Navigation />
                </div>
            </div>
        </header>
    );
}

export default HeaderTemplate;