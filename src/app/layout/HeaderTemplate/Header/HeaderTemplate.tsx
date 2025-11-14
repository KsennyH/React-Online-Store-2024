import styles from './Header.module.scss';
import { AddressInfoList, Logotype } from "@/shared/ui";
import { DesktopNav } from '../DesktopNav/DesktopNav';
import { MobileNav } from '../MobileNav/MobileNav';
import { JSX } from 'react';
import { CircleUser } from 'lucide-react';
import { SearchComponent } from '@/features/product';
import { CartIcon } from '@/features/cart';
import { Link } from 'react-router-dom';

export function HeaderTemplate(): JSX.Element {

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
                                    <Link className={styles.user} to='/account' aria-label="Личный кабинет">
                                        <CircleUser color="#ffffff" />
                                        <span className={styles.label}>Личный кабинет</span>
                                    </Link>
                                    <CartIcon />
                                </div>
                            </div>
                        </div>
                        <div className={styles.info}>
                            <AddressInfoList />
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