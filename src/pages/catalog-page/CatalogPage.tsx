import { useEffect, useRef } from 'react';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import Filter from '@/components/catalog/filters/Filter';
import ProductsList from '@/components/catalog/products/ProductsList';
import styles from './CatalogPage.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { setCategoryId, setCurrentPage, setFilters, setSortType, SortItem } from '@/redux/filterSlice';
import SortingProduct from '@/components/catalog/sorting/SortingProduct';
import SortBy from '@/components/catalog/sort/SortBy';
import PaginationButtons from '@/components/catalog/pagination/PaginationButtons';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import { sort } from '@/components/catalog/sort/sortOptions';
import { fetchProducts } from '@/redux/productsSlice';

function CatalogPage() {
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const { categoryId, sortType, currentPage, value: searchValue, types } = useSelector((state: RootState) => state.filter);  
    const {items, totalProducts} = useSelector((state: RootState) => state.products);

    const isFirstMount = useRef(true);

    const countPerPage = 9;
    const totalPages = Math.ceil(totalProducts / countPerPage);
    const startIndex = (currentPage - 1) * countPerPage;
    const endIndex = startIndex + countPerPage;
    const currentProducts = items.slice(startIndex, endIndex);

    useEffect(() => {
        document.title = "Каталог товаров";
    }, []);

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sortItem = sort.find((s) => s.sort === params.sortType) || sort[0];

            dispatch(setFilters({
                categoryId: Number(params.categoryId) || 0,
                currentPage: Number(params.currentPage) || 1,
                sortType: sortItem,
                value: searchValue,
                types: params.type || ''
            }));
        }
    }, []);

    useEffect(() => {
        const getProducts = async () => {
            const queryParams = {
                page: currentPage,
                ...(categoryId ? { categories: categoryId } : {}),
                ...(sortType.sort ? { sortBy: sortType.sort } : {}),
                ...(searchValue ? { search: searchValue } : {}),
                ...(types ? { type: types } : {})
            };

            const queryString = qs.stringify(queryParams);

            const url = `https://665b3a2e003609eda4604130.mockapi.io/products?${queryString}`;
        
            try {
                dispatch(fetchProducts({ 
                    categoryId,
                    sortType: sortType.sort,
                    searchValue,
                    currentPage,
                    types
                 }));
            } catch {
                console.error('Ошибка загрузки');
            }
        }
        getProducts();

        if (!isFirstMount.current) {
            const query = qs.stringify({
                categoryId,
                sortType: sortType.sort,
                currentPage,
            });
            navigate(`?${query}`);
        }
        isFirstMount.current = false;
    }, [categoryId, sortType, searchValue, currentPage, types]);

    const onChangeCategory = (id:number) => dispatch(setCategoryId(id));
    const onChangeSort = (obj: SortItem) => dispatch(setSortType(obj));
    const onChangeCurrentPage = (page:number) => dispatch(setCurrentPage(page));

    return (
        <> 
            <Breadcrumb />
            <div className={styles.catalog}>
                <div className="container">
                    <div className={styles.catalog__inner}>
                        <button className={styles.catalog__filterBtn} type="button"><img src="img/filter.svg" alt="Фильтр"/></button>
                        <aside className={styles.catalog__filter}>
                            <Filter />
                        </aside>
                        <div className={styles.catalog__products}>
                            <SortingProduct sort={categoryId} sortChange={onChangeCategory}/>
                            <div className={styles.catalog__sort}>
                                <SortBy sortCriterion={sortType} sortCriterionChange={onChangeSort}/>
                            </div>
                            <ProductsList products={currentProducts} />
                            {
                                totalPages > 1 && (<PaginationButtons current={currentPage} pagesCount={totalPages} setCurrent={onChangeCurrentPage} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogPage;