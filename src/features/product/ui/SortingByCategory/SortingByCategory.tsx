import { JSX } from "react";
import styles from './SortingByCategory.module.scss';
import { Button } from "@/shared/ui";
import { getCategory, setCategoryId } from "@/features/product/model";
import { CATEGORIES } from "@/shared/constants";
import { useAppDispatch, useAppSelector } from "@/shared/lib";

export function SortingByCategory(): JSX.Element {    

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