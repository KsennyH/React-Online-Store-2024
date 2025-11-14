import { useAppDispatch } from "@/shared/lib";
import { Button } from "@/shared/ui";
import { JSX } from "react";
import toast from "react-hot-toast";
import { addProduct, AddToCartButtonProps } from "@/features/cart/model";
import { ShoppingCart } from "lucide-react";

export function AddToCartButton({ id, img, title, price, variant, productCount, totalPrice, type='sm' }: AddToCartButtonProps): JSX.Element {

    const dispatch = useAppDispatch();

    const handleClickAddProduct = () => {
        dispatch(
            addProduct({
                id,
                img,
                title,
                price,
                variant,
                productCount,
                totalPrice
            }),
        );
        toast.success(`Товар ${title} добавлен в корзину`, {
            position: 'top-right',
            duration: 2000
        });
    }

    return(
        <Button onClick={handleClickAddProduct} size={type} type="button">
            { type === 'lg' && <ShoppingCart color="#ffffff" />}
            <span>В корзину</span>
        </Button>
    );
}