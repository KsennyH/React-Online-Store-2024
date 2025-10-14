import AddressInfo from "../header/address/AddressInfo";
import Logotype from "../header/logo/Logotype";
import FooterNav from "./footer-nav/FooterNav";
import styles from "./Footer.module.scss";
import Schedule from "./schedule/Schedule";

function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className="container">
                    <div className={styles.footer__inner}>
                        <div className={styles.footer__socialInfo}>
                            <div className={styles.footer__logo}>
                               <Logotype />
                            </div>
                        </div>

                        <div className={styles.footer__infoContent}>
                            <div className={styles.footer__contacts}>
                                <AddressInfo />
                                <Schedule />
                            </div>
                            <FooterNav />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__copyright}>
                <div className="container">
                    <p>© Магазин мототехники в Иваново 2018 - 2022</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;