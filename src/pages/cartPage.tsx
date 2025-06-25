import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import { useDispatch, useSelector } from "react-redux";
import Cart from '../components/catalog/cart/cart';
import EmptyCart from '../components/catalog/cart/emptyCart';
import { clearCart } from '../redux/cartSlice';
import { RootState } from '../redux/store';

function CartPage() {
    const productsInCart = useSelector((state: RootState) => state.cart.products);  // массив товаров в корзине (изначально пустой)
    const count = useSelector((state: RootState) => state.cart.count);              // всего товаров в корзине 
    const priceTotal = useSelector((state: RootState) => state.cart.price);         // цена всех товаров в корзине
    const dispatch = useDispatch();

    const onClickClear = () => {
        if(window.confirm('Очистить корзину?')) {
            dispatch(clearCart());
        }
    }

    if (count === 0) {    // если товары в корзину не добавлены, выводим пустую корзину
        return (
            <main className="main">
                <Breadcrumbs />
                <EmptyCart />
            </main>
        )
    }

    return(
        <main className="main">
            <Breadcrumbs />
            <section className="cart">
                <div className="container"> 
                    <h1 className="cart__title title">Корзина товаров</h1>
                    <div className="cart__info">
                    <div className="cart-header">
                        <div className="card-header__name">Название</div>
                        <div className="card-header__count">Количество</div>
                        <div className="card-header__price">Цена</div>
                    </div>
                    </div>
                    <div className="cart-products">
                        {productsInCart.map((obj) => (
                            <Cart key={obj.id} {...obj} />
                        ))}
                    </div>
                    <div className="cart__total"> 
                        <div className="cart-footer">
                            <button onClick={onClickClear} className="cart-footer__clear">Очистить корзину</button>
                            <div className="cart-footer__total"> <span>Всего:</span><span data-total="data-total">{priceTotal}</span><span>руб.</span></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CartPage;