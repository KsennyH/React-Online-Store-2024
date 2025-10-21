import ProductCard from './product-card/ProductCard';
import { Product, Status } from '@/redux/productsSlice';
import styles from './ProductsList.module.scss';
import { ProductCardSkeleton } from '@/components/ui/skeleton/ProductCardSkeleton';
import { memo } from 'react';

interface ProductsListProps {
    products: Product[];
    status: Status;
}
const ProductsList = memo(({ products, status}: ProductsListProps) => {

    return(
        <div className={styles.products}>
            <ul className={styles.products__list}>
            {
                status === Status.LOADING ? [...Array(6)].map((_, i) => (
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