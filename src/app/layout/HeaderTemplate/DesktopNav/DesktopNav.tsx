import { NavLink } from 'react-router-dom';
import styles from './DesktopNav.module.scss';
import { JSX } from 'react';
import { NAVIGATION } from '@/shared/constants';

export function DesktopNav(): JSX.Element {

    return (
        <div className={styles.navigation}> 
            <ul className={styles.list}>
                {
                    NAVIGATION.map((navElem, i) => <li key={i} className={styles.item}><NavLink to={navElem.path} end={navElem.path === '/'} className={({isActive}) => isActive ? `${styles.link} ${styles.active}` : styles.link}>{navElem.title}</NavLink></li>)
                }
            </ul>
        </div>
    );
}