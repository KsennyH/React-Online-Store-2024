import qs from 'qs';
import Sorting from '../sorting/sorting';
import Sort, { sort } from '../sort/sort';
import Card from './product-card/card';
import Pagination from '../pagination/pagination';
import { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import { SearchContext } from '../../../App';
import { useSelector } from "react-redux";
import { setCategoryId, setSortType, setCurrentPage, setFilters, SortItem } from '../../../redux/filterSlice';
import { fetchProducts } from '../../../redux/productsSlice';
import { RootState, useAppDispatch } from '../../../redux/store';

function Products() {
    // const { searchValue } = React.useContext(SearchContext);
    const categoryId = useSelector((state: RootState) => state.filter.categoryId);  //порядковый номер для сортировки по категориям (мопеды и так далее)
    const sortType = useSelector((state: RootState) => state.filter.sortType);      //объект для типа сортировки (по цене и так далее)
    const currentPage = useSelector((state: RootState) => state.filter.currentPage);//порядковый номер страницы для пагинации
    const searchValue = useSelector((state: RootState) => state.filter.value);
    const products = useSelector((state: RootState) => state.products.items);       //массив с карточками товаров
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isSearch = useRef(false);
    const isMount = useRef(false);

    const onChangeCategory = (id:number) => {
        dispatch(setCategoryId(id))
    }

    const onChangeSort = (obj: SortItem) => {
        dispatch(setSortType(obj));
    }

    const onChangeCurrentPage = (id:number) => {
        dispatch(setCurrentPage(id));
    }

    const getProducts = async () => {
        const categorySort = `&categories=${categoryId}`;
        const sortCr = `&sortBy=${sortType.sort}`;
        const searchProduct = `&search=${searchValue}`;
        const curPage = `&page=${currentPage}`;
        const getCardsWithSearch = `https://665b3a2e003609eda4604130.mockapi.io/products?l=6${curPage}${searchProduct ? searchProduct : ''}`;
        const getCards = `https://665b3a2e003609eda4604130.mockapi.io/products?l=6${curPage}${categorySort ? categorySort : ''}${sortCr ? sortCr : ''}`;
    
        try {
            dispatch(
                fetchProducts({
                getCards,
                getCardsWithSearch,
                searchValue
            }));
        } catch {
            console.log('error');
        }
    }


    useEffect(() => {
        if(isMount.current) {
            const querystring = qs.stringify({
                categoryId,
                sortType: sortType.sort,
                currentPage
            });
            navigate(`?${querystring}`);
        }
        isMount.current = true;
    }, [categoryId, sortType, searchValue, currentPage]);

    useEffect(() => {
        if(window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sortSortList = sort.find((obj) => obj.sort === params.sortType);
            if(sortSortList) {
                params.sortSortList = sortSortList;
                let sortType = params.sortSortList;
                
            }

            let categoryId = Number(params.categoryId);
            let currentPage = Number(params.currentPage);
            let value = searchValue;

            console.log(params.categoryId);
            console.log(params);
            

            dispatch(setFilters({
                categoryId,
                currentPage,
                sortType,
                value
            }));

            isSearch.current = true;
        }
    }, []);

    useEffect(() => {
        if(!isSearch.current) {
            getProducts();
        }
        isSearch.current = false;
    }, [categoryId, sortType, searchValue, currentPage]);

    return(
        <div className="catalog__products">
            <div className="catalog__sorting"> 
                <Sorting sort={categoryId} sortChange={onChangeCategory}/>
            </div>
            <div className="catalog__sort">
                <Sort sortCriterion={sortType} sortCriterionChange={onChangeSort}/>
            </div>
            <div className="catalog__cards"> 
                <div className="products-block">
                    <ul className="products-block__list"> 
                        {products.map((obj) => (
                            <Link to={`/products/${obj.id}`} key={obj.id}>
                                <Card {...obj}/>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div> 
            <div className="catalog__pagination">
                <Pagination current={currentPage} setCurrent={onChangeCurrentPage} />
            </div>       
        </div>
    );
}

export default Products;