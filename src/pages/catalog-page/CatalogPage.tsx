import { useEffect, useRef } from 'react';
import Breadcrumb from '@/components/breadcrumbs/Breadcrumb';
import Filter from '@/components/catalog/filters/Filter';
import ProductsList from '@/components/catalog/products/ProductsList';
import styles from './CatalogPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getFiltersValue, setSortType, setCategoryId, SortItem, setCurrentPage, PaginationType, setQueryFromUrl } from '@/redux/filterSlice';
import SortingProduct from '@/components/catalog/sorting/SortingProduct';
import SortBy from '@/components/catalog/sort/SortBy';
import PaginationButtons from '@/components/catalog/pagination/PaginationButtons';
import qs from 'qs';
import { fetchProducts, getProducts, Status } from '@/redux/productsSlice';
import { RingLoader } from 'react-spinners';
import { SORT_OPTIONS } from '@/constants/sortOptions';
import useSetQueryParams from '@/hooks/useSetQueryParams';

function CatalogPage() {
    
    const dispatch = useAppDispatch();
      
    const { sortTypeValue, categoryId, pagination } = useAppSelector((state) => getFiltersValue(state));
    const { items, status, error } = useAppSelector((state) => getProducts(state));
    const TOTAL = 18; //Mockapi не возвращает total при пагинации, поэтому пока константа
    const LIMIT = pagination.limit;
    const pagesCount = Math.ceil(TOTAL / LIMIT);
    
    const isFirstMount = useRef(true);

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sortItem = SORT_OPTIONS.find((s) => s.sort === params.sortTypeValue) || SORT_OPTIONS[0];

            dispatch(setQueryFromUrl({
                categoryId: Number(params.categoryId) || 0,
                pagination: {
                    currentPage: Number(params.currentPage) || 1,
                    limit: Number(params.limit) || LIMIT,
                },
                sortTypeValue: sortItem,
            }));
        }
    }, []);

    useSetQueryParams( sortTypeValue, categoryId, pagination, isFirstMount );

    const onChangeCategory = (id:number) => dispatch(setCategoryId(id));
    const onChangeSort = (item: SortItem) => dispatch(setSortType(item));
    const onChangeCurrentPage = ( pagination : PaginationType) => dispatch(setCurrentPage(pagination));

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
                            <SortingProduct category={categoryId} handleCategoryChange={onChangeCategory}/>
                            <div className={styles.catalog__sort}>
                                <SortBy sortCriterion={sortTypeValue} handleSortChange={onChangeSort}/>
                            </div>
                            {
                                status === Status.ERROR && <div style={{padding: 40 + 'px', display: 'flex', justifyContent: 'center' }}><h2>{error}</h2></div>
                            }
                            {
                                status === Status.LOADING ? <div style={{padding: 40 + 'px', display: 'flex', justifyContent: 'center' }}><RingLoader color='#414141' /></div> : (
                                    <ProductsList products={items} />
                                )
                            }
                            
                            {
                                pagesCount > 1 && (<PaginationButtons pagination={pagination} pagesCount={pagesCount} handleCurrentChange={onChangeCurrentPage} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogPage;