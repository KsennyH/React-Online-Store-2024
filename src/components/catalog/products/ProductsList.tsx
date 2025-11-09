import { Product } from '@/types/productTypes';
import ProductCard from './product-card/ProductCard';
import styles from './ProductsList.module.scss';
import { memo } from 'react';
import Skeleton from 'react-loading-skeleton';

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
                    <li key={i}><Skeleton height={384} style={{borderRadius: 18}} /></li>
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