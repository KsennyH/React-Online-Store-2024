import { Product, ProductCard } from "@/entities/product";
import { AddToCartButton } from "@/features/cart";
import { JSX, useState } from "react";

export function ProductCardContainer({ product }: { product: Product}): JSX.Element {

    const [motoColorIndex, setMotoColorIndex] = useState(0);

    return(
        <ProductCard 
            product={product}
            slot={<AddToCartButton
                id={product.id}  
                img={product.variants[motoColorIndex].images[0]}
                price={product.price}
                title={product.title}
                variant={product.variants[motoColorIndex]}  
                productCount={1}
                totalPrice={product.price}
            />}
            selectedVariant={motoColorIndex}
            onSelectedVariant={setMotoColorIndex}
        />
    );
}