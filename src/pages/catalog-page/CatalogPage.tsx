import { useCallback, useEffect, useRef, useState } from 'react';
import Filter from '@/components/catalog/filters/Filter';
import ProductsList from '@/components/catalog/products/ProductsList';
import styles from './CatalogPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getFiltersValue, setSortType, setCategoryId, setCurrentPage, setQueryFromUrl } from '@/redux/filterSlice';
import SortingProduct from '@/components/catalog/sorting/SortingProduct';
import SortBy from '@/components/catalog/sort/SortBy';
import PaginationButtons from '@/components/catalog/pagination/PaginationButtons';
import qs from 'qs';
import { SORT_OPTIONS } from '@/constants/sortOptions';
import useSetQueryParams from '@/hooks/useSetQueryParams';
import { FunnelPlus } from 'lucide-react';
import { PaginationType, SortItem } from '@/types/filterTypes';

function CatalogPage() {

    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
      
    const { sortTypeValue, categoryId, pagination, selected } = useAppSelector((state) => getFiltersValue(state));

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
                    currentPage: Number(params.page) || 1,
                    limit: Number(params.limit) || pagination.limit,
                },
                sortTypeValue: sortItem,
                selected: {
                    brandsChecked: normalizeToArray(params.brand),
                    typesChecked: normalizeToArray(params.type)
                }
            }));
        }
        
    }, [dispatch]);

    const { data, error, isLoading } = useSetQueryParams( sortTypeValue, categoryId, pagination, selected, isFirstMount );
    console.log(data, error, isLoading);

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
                        {
                            error && <div style={{padding: 40 + 'px', display: 'flex', justifyContent: 'center' }}>Произошла ошибка: {String(error)}</div>
                        }
                        <ProductsList products={data?.items ?? []} isLoading={isLoading} />
                        {
                            data && data.meta.total_pages > 1 && (<PaginationButtons pagination={pagination} totalPages={data.meta.total_pages} handleCurrentChange={onChangeCurrentPage} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CatalogPage;