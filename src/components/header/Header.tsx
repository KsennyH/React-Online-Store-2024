import Logo from "./logo/Logo";
import AddressInfo from "./address/AddressInfo";
import UserActions from "./actions/UserActions";
import Navigation from "./navigation/navigation";
import Search from './search/search';
import styles from './Header.module.scss';

function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className="container">
                    <div className={styles.header__inner}>
                        <div className={styles.header__logo}>   
                            <Logo />
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

export default Header;