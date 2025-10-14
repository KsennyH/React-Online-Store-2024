import { FOOTER_NAVIGATION } from "@/constants/footer-navigation";
import styles from "./FooterNav.module.scss";

function FooterNav() {
    return(
        <div className={styles.footerNav}>
            {
                FOOTER_NAVIGATION.map(obj => (
                    <ul className={styles.footerNav__list} key={obj.category}>
                        <h4 className={styles.footerNav__label}>{obj.category}</h4>
                        <div className={styles.footerNav__content}>
                            {
                                obj.links.map(link => (
                                    <li key={link.title}><a className={styles.footerNav__link} href={link.path}>{link.title}</a></li>
                                ))
                            }
                        </div>
                    </ul>
                ))
            }
        </div>
    );
}

export default FooterNav;