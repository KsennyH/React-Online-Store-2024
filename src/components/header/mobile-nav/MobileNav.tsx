import { Menu, X } from "lucide-react";
import styles from "./MobileNav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { NAVIGATION } from "@/constants/navigation";

function MobileNav() {
    
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);
    return (
    <div className={styles.mobileNav}>
      <button className={styles.toggle} onClick={toggleMenu}>
        {isOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
      </button>
      <Link to='/'>
        <img src="/mobile-header-logo.png" alt="Logo" />
      </Link>

      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.list}>
            {NAVIGATION.map((item, index) => (
              <li key={index} className={styles.item}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.link} ${styles.active}`
                      : styles.link
                  }
                  onClick={closeMenu}
                >
                  {item.title}
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