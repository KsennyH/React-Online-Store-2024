import React, { useState } from 'react';
import { addProduct, CartItem } from '../../../../redux/cartSlice';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../../../../redux/store';
import { Product } from '../../../../redux/productsSlice';
import { Link } from 'react-router-dom';

const Card: React.FC<Product> = ({id, img, title, article, price, colors}) => {

    const [motoColor, setMotoColor] = useState(0);
    const color = colors[motoColor];
    const itemInCart = useSelector((state:RootState) => state.cart.products.find((obj) => obj.id === id));
    const dispatch = useDispatch();

    const addedCount = itemInCart ? itemInCart.productCount : 0;
    
    const onClickAddProduct = () => {
        const item: CartItem = {
            id,
            img,
            title,
            price,
            color,
            productCount: 0
        }
        dispatch(addProduct(item));
    }

    return(
        <li className="products-block__item"> 
            <article className="product-card js-card" data-id="01">
                    <div className="product-card__img"><img className="js-img-card" src={img} alt={title}/></div>
                        <div className="product-card__info"> 
                            <Link to={`/products/${id}`} key={id}>
                                <h3 className="product-card__title card-title js-title">{title}</h3>
                            </Link>
                            <div className="product-card__content"> 
                                <ul className="product-card__colors">
                                    {colors.map((item, i) => (
                                        <li key={i} onClick={() => setMotoColor(i)} className={motoColor === i ? "product-card__color product-card__color_active" : "product-card__color"}>{item}</li>
                                    ))}
                                </ul>
                            <div className="product-card__information"> <span className="product-card__article">Артикул: {article}</span><span className="product-card__text">В наличии</span></div>
                        </div>
                    </div>
                <span className="product-card__price btn btn--price js-price">{price} руб.</span>
                <button className="product-card__btn btn btn--busket" data-cart="data-cart" onClick={onClickAddProduct}>
                    <span className="btn__text">В корзину</span>
                    {addedCount > 0 && (
                        <div className="product-card__count">{addedCount}</div>
                    )}
                </button>
            </article>
        </li>
    );
}

export default Card;