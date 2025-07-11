import styles from './Breadcrumb.module.scss';

function Breadcrumb() {
    return (
        <div className={styles.breadcrumbs}> 
          <div className="container"> 
                <ul className={styles.breadcrumbs__list}>
                    <li className={styles.breadcrumbs__item}> 
                        <span className={styles.breadcrumbs__link}>Мототехника</span>
                    </li>
                    <li className={styles.breadcrumbs__item}> 
                        <span className={styles.breadcrumbs__link}>Все</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;