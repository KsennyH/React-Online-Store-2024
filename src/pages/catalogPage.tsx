import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import Filters from '../components/catalog/filters/filters';
import Products from '../components/catalog/products/products';

function CatalogPage() {
    return (
        <main className="main"> 
            <Breadcrumbs />
            <div className="catalog">
                <div className="container">
                    <div className="catalog__inner">
                        <button className="catalog__filter-btn js-filter-btn" type="button"><img src="img/filter.svg" alt="Фильтр"/></button>
                        <aside className="catalog__filter">
                            <Filters />
                        </aside>
                        <Products />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default CatalogPage;