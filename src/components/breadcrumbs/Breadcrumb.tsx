import styles from './Breadcrumb.module.scss';

function Breadcrumb() {
    return (
        <div className={styles.breadcrumbs}> 
          <div className="container"> 
                <ul className={styles.list}>
                    <li className={styles.item}> 
                        <span className={styles.link}>Мототехника</span>
                    </li>
                    <li className={styles.item}> 
                        <span className={styles.link}>Все</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Breadcrumb;