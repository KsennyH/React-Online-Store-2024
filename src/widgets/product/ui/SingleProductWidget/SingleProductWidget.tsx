import { JSX, useState } from "react";
import styles from './SingleProductWidget.module.scss';
import { SliderProductCard } from "../SliderProductCard/SliderProductCard";
import { ErrorMessage, Loader } from "@/shared/ui";
import { SingleProductCardInfo, useGetProductQuery } from "@/entities/product";
import { AddToCartButton } from "@/features/cart";

export function SingleProductWidget({ id } : { id: string }): JSX.Element {

    const [motoColor, setMotoColor] = useState(0);
    const { data, isLoading, error } = useGetProductQuery(String(id));

    if(error) { 
        console.error('Ошибка при загрузке товара:', error);
        return <ErrorMessage text="Не удалось загрузить товар. Попробуйте позже." />        
    }

    if (isLoading) {
        return <Loader />;
    }

    if(!data) return <ErrorMessage text="Товар не найден" />

    return(
        <div className={styles.info}>
            <div className="container">
                <div className={styles.wrapper}>
                    <SliderProductCard images={data.variants[motoColor].images} />
                    <SingleProductCardInfo 
                    product={data} 
                    selectedVariant={motoColor}
                    onSelectedVariant={setMotoColor}
                    slot={
                    <AddToCartButton 
                        id={data.id}
                        title={data.title}
                        price={data.price}
                        img={data.variants[motoColor].images[0]}
                        variant={data.variants[motoColor]}
                        productCount={1}
                        totalPrice={data.price}
                        type="lg"
                    />
                    }/>
                </div>
            </div>
      </div>
    );
}