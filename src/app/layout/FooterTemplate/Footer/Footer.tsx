import { AddressInfoList, Logotype, Schedule } from "@/shared/ui";
import styles from "./Footer.module.scss";
import { JSX } from "react";
import { FooterNav } from "../FooterNavigation/FooterNav";

export function Footer(): JSX.Element {
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
                                <AddressInfoList />
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