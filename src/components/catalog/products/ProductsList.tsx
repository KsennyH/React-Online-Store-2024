import ProductCard from './product-card/ProductCard';
import { Product } from '@/redux/productsSlice';
import styles from './ProductsList.module.scss';
import { ProductCardSkeleton } from '@/components/ui/skeleton/ProductCardSkeleton';

interface ProductsListProps {
    products: Product[];
    limit: number;
}
function ProductsList ({products, limit}: ProductsListProps) {
    
    return(
        <> 
            <div className={styles.products}>
                <ul className={styles.products__list}>
                {
                    !products || products.length === 0 ? [...Array(limit)].map((_, i) => (
                        <li key={i}><ProductCardSkeleton /></li>
                    )) : products.map((product) => (
                        <li key={product.id}>
                            <ProductCard singleProduct={product}/>
                        </li>
                    ))
                }
                </ul>
            </div>     
        </>
    );
}

export default ProductsList;