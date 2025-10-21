import { useCallback, useEffect, useRef, useState } from 'react';
import Filter from '@/components/catalog/filters/Filter';
import ProductsList from '@/components/catalog/products/ProductsList';
import styles from './CatalogPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getFiltersValue, setSortType, setCategoryId, SortItem, setCurrentPage, PaginationType, setQueryFromUrl } from '@/redux/filterSlice';
import SortingProduct from '@/components/catalog/sorting/SortingProduct';
import SortBy from '@/components/catalog/sort/SortBy';
import PaginationButtons from '@/components/catalog/pagination/PaginationButtons';
import qs from 'qs';
import { getProducts, Status } from '@/redux/productsSlice';
import { SORT_OPTIONS } from '@/constants/sortOptions';
import useSetQueryParams from '@/hooks/useSetQueryParams';
import { FunnelPlus } from 'lucide-react';

function CatalogPage() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
      
    const { sortTypeValue, categoryId, pagination, selected } = useAppSelector((state) => getFiltersValue(state));
    const { items, totalPages, totalProducts, currentPage, status, error } = useAppSelector((state) => getProducts(state));

    const LIMIT = pagination.limit;

    const normalizeToArray = (value: unknown): string[] => {
        if (Array.isArray(value)) return value;
        if (typeof value === 'string') return [value];
        return [];
    };

    const isFirstMount = useRef(true);

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sortItem = SORT_OPTIONS.find((s) => s.sort === params.sortTypeValue) || SORT_OPTIONS[0];

            dispatch(setQueryFromUrl({
                categoryId: Number(params.categoryId) || 0,
                pagination: {
                    currentPage: Number(params.currentPage) || currentPage,
                    limit: Number(params.limit) || LIMIT,
                },
                sortTypeValue: sortItem,
                selected: {
                    brandsChecked: normalizeToArray(params.brandsChecked),
                    typesChecked: normalizeToArray(params.typesChecked)
                }
            }));
        }
        
    }, [dispatch]);

    useSetQueryParams( sortTypeValue, categoryId, pagination, selected, isFirstMount );

    const onChangeCategory = useCallback((id:number) => dispatch(setCategoryId(id)), [categoryId]);
    const onChangeSort = useCallback((item: SortItem) => dispatch(setSortType(item)), [sortTypeValue]);
    const onChangeCurrentPage = useCallback(( pagination : PaginationType) => dispatch(setCurrentPage(pagination)), [pagination]);

    return (
        <section className={styles.catalog}>
            <div className="container">
                <div className={styles.catalog__inner}>
                    <button className={styles.catalog__filterBtn} type="button" onClick={() => setIsOpen(prev => !prev)}><FunnelPlus color="#ffffff" /></button>
                    <aside className={styles.catalog__filter}>
                        <Filter isOpen={isOpen} />
                    </aside>
                    <div className={styles.catalog__products}>
                        <SortingProduct category={categoryId} handleCategoryChange={onChangeCategory}/>
                        <div className={styles.catalog__sort}>
                            <SortBy sortCriterion={sortTypeValue} handleSortChange={onChangeSort}/>
                        </div>
                        { status === Status.ERROR && <div style={{padding: 40 + 'px', display: 'flex', justifyContent: 'center' }}><h2>{error}</h2></div> }  
                        <ProductsList products={items} status={status} />
                        {
                            totalPages > 1 && (<PaginationButtons pagination={pagination} totalPages={totalPages} handleCurrentChange={onChangeCurrentPage} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CatalogPage;