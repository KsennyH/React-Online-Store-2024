import { FOOTER_NAVIGATION } from "@/shared/constants";
import styles from "./FooterNav.module.scss";
import { JSX } from "react";

export function FooterNav(): JSX.Element {
    return(
        <div className={styles.footerNav}>
            {
                FOOTER_NAVIGATION.map(obj => (
                    <div className={styles.list} key={obj.category}>
                        <h4 className={styles.label}>{obj.category}</h4>
                        <ul className={styles.content}>
                            {
                                obj.links.map(link => (
                                    <li key={link.title}><a className={styles.link} href={link.path}>{link.title}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}