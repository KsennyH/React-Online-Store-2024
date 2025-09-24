import ProductCard from './product-card/ProductCard';
import { Product } from '@/redux/productsSlice';
import styles from './ProductsList.module.scss';

interface ProductsListProps {
    products: Product[];
}
function ProductsList({products}: ProductsListProps) {
    
    return(
        <> 
            <div className={styles.products}>
                <ul className={styles.products__list}> 
                    {products.map((product) => (
                        <li key={product.id}><ProductCard {...product}/></li>
                    ))}
                </ul>
            </div>     
        </>
    );
}

export default ProductsList;