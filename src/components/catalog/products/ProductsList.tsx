import { Product } from '@/types/productTypes';
import ProductCard from './product-card/ProductCard';
import styles from './ProductsList.module.scss';
import { ProductCardSkeleton } from '@/components/ui/skeleton/ProductCardSkeleton';
import { memo } from 'react';

interface ProductsListProps {
    products: Product[];
    isLoading: boolean;
}
const ProductsList = memo(({ products, isLoading}: ProductsListProps) => {

    return(
        <div className={styles.products}>
            <ul className={styles.list}>
            {
                isLoading ? [...Array(6)].map((_, i) => (
                    <li key={i}><ProductCardSkeleton /></li>
                ))
                 : products.map((product) => (
                    <li key={product.id}>
                        <ProductCard singleProduct={product}/>
                    </li>
                ))
            }
            </ul>
        </div>     
    );
}) 

export default ProductsList;