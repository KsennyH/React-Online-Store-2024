import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

function Navigation() {

    const navlist = [
        {
            link: "Каталог",
            path: "/",
        },
        {
            link: "Сервис",
            path: "/services",
        },
        {
            link: "Контакты",
            path: "/contacts",
        },
    ];

    return (
        <div className={styles.navigation}> 
            <ul className={styles.navigation__list}>
                {
                    navlist.map((navElem, i) => <li key={i} className={styles.navigation__item}><NavLink to={navElem.path} className={({isActive}) => isActive ? `${styles.navigation__link} ${styles.active}` : styles.navigation__link}>{navElem.link}</NavLink></li>)
                }
            </ul>
        </div>
    );
}

export default Navigation;