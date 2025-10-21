import { NavLink } from 'react-router-dom';
import styles from './DesktopNav.module.scss';
import { NAVIGATION } from '@/constants/navigation';

function Navigation() {

    return (
        <div className={styles.navigation}> 
            <ul className={styles.navigation__list}>
                {
                    NAVIGATION.map((navElem, i) => <li key={i} className={styles.navigation__item}><NavLink to={navElem.path} className={({isActive}) => isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link}>{navElem.title}</NavLink></li>)
                }
            </ul>
        </div>
    );
}

export default Navigation;