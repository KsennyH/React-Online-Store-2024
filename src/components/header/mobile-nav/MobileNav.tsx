import { Menu, X } from "lucide-react";
import styles from "./MobileNav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function MobileNav() {
    const navList = [
        { link: "Каталог", path: "/" },
        { link: "Сервис", path: "/services" },
        { link: "Контакты", path: "/contacts" },
    ];
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);
    return (
    <div className={styles.mobileNav}>
      <button className={styles.mobileNav__toggle} onClick={toggleMenu}>
        {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
      </button>
      <Link to='/'>
        <img src="/mobile-header-logo.png" alt="Logo" />
      </Link>

      {isOpen && (
        <div className={styles.mobileNav__menu}>
          <ul className={styles.mobileNav__list}>
            {navList.map((item, index) => (
              <li key={index} className={styles.mobileNav__item}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.mobileNav__link} ${styles.active}`
                      : styles.mobileNav__link
                  }
                  onClick={closeMenu}
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MobileNav;