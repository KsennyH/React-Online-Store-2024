import { JSX } from "react";
import styles from './SortingProduct.module.scss';
import { CATEGORIES } from "@/constants/categories";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { getCategory, setCategoryId } from "@/redux/filterSlice";
import { Button } from "@/shared";

const SortingProduct = (): JSX.Element => {    

    const categoryId = useAppSelector((state) => getCategory(state));

    const dispatch = useAppDispatch();
    const onChangeCategory = (id:number) => dispatch(setCategoryId(id));
    

    return(
        <nav className={styles.sorting}> 
            <ul className={styles.list}> 
                {CATEGORIES.map((elem, i) => (
                    <li key={i}> 
                        <Button onClick={
                            () => onChangeCategory(i)}
                            isActive={categoryId === i}
                            size="lg"
                            variant="secondary"
                            >{elem}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default SortingProduct;