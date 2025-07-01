import Card from './product-card/card';
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
                        <Card {...product} key={product.id}/>
                    ))}
                </ul>
            </div>     
        </>
    );
}

export default ProductsList;