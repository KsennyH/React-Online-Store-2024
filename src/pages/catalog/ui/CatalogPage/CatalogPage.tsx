import { useState } from 'react';
import styles from './CatalogPage.module.scss';
import { FunnelPlus } from 'lucide-react';
import Catalog from '@/components/catalog/Catalog';
import { Filter, SortBy, SortingByCategory } from '@/features/product';

export function CatalogPage() {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.inner}>
                    <button className={styles.filterBtn} type="button" onClick={() => setIsOpen(prev => !prev)}><FunnelPlus color="#ffffff" /></button>
                    <aside className={styles.filter}>
                        <Filter isOpen={isOpen} />
                    </aside>
                    <div className={styles.products}>
                        <SortingByCategory />
                        <div className={styles.sort}>
                            <SortBy />
                        </div>
                        <Catalog />
                    </div>
                </div>
            </div>
        </section>
    );
}