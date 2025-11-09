import { CircleUser, HeartPlus, MessageCircleCode, Rows4, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './AccountAside.module.scss';
function AccountAside() {
    return(
         <aside className={styles.aside}>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <CircleUser color="#ffffff" />
                        <Link to='/account'>Личные данные</Link>
                    </li>
                    <li className={styles.item}>
                        <ShoppingCart color="#ffffff" />
                        <Link to='/account'>Мои заказы</Link>
                    </li>
                    <li className={styles.item}>
                        <HeartPlus color="#ffffff" />
                        <Link to='/account'>Избранное</Link>
                    </li>
                    <li className={styles.item}>
                        <Rows4 color="#ffffff" />
                        <Link to='/account'>Мои отзывы</Link>
                    </li>
                    <li className={styles.item}>
                        <MessageCircleCode color="#ffffff" />
                        <Link to='/account'>Мои комментарии</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
export default AccountAside;