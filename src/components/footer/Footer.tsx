import AddressInfo from "../header/address/AddressInfo";
import Logotype from "../header/logo/Logotype";
import FooterNav from "./footer-nav/FooterNav";
import styles from "./Footer.module.scss";
import Schedule from "./schedule/Schedule";

function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className="container">
                    <div className={styles.inner}>
                        <div className={styles.socialInfo}>
                            <div className={styles.logo}>
                               <Logotype />
                            </div>
                        </div>

                        <div className={styles.infoContent}>
                            <div className={styles.contacts}>
                                <AddressInfo />
                                <Schedule />
                            </div>
                            <FooterNav />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="container">
                    <p>© Магазин мототехники в Иваново 2018 - {currentYear}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;