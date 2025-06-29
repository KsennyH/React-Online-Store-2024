import { Link } from 'react-router-dom';
function EmptyCart() {
    return (
        <section className="busket"> 
            <div className="container"> 
                <h2 className="busket__title title">К сожалению, Ваша корзина пуста</h2>
                <p className="busket__description">Вы можете это исправить: выберите в каталоге интересующий товар и нажмите кнопку “В корзину”.</p><Link className="btn" to={'/'}>Перейти в каталог</Link>
            </div>
        </section>
    );
}

export default EmptyCart;