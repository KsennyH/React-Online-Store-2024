import { useState } from 'react';
import Filter from '@/components/catalog/filters/Filter';
import styles from './CatalogPage.module.scss';
import SortingProduct from '@/components/catalog/sorting/SortingProduct';
import SortBy from '@/components/catalog/sort/SortBy';
import { FunnelPlus } from 'lucide-react';
import Catalog from '@/components/catalog/Catalog';

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
                        <SortingProduct />
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