import { Product } from '@/entities/product';
import styles from './ProductsList.module.scss';
import { memo } from 'react';
import Skeleton from 'react-loading-skeleton';
import { ProductCardContainer } from '@/widgets/product';

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
                        <ProductCardContainer 
                            product={ product }
                        />
                    </li>
                ))
            }
            </ul>
        </div>     
    );
}) 

export default ProductsList;