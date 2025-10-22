import { useGetAllProductsQuery } from "@/api/product/productApi";
import { FilterSliceState, PaginationType, SortItem } from "@/redux/filterSlice";
// import { fetchProducts } from "@/redux/productsSlice";
import { useAppDispatch } from "@/redux/store";
import qs from 'qs';
import { RefObject, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type SelectedFilters = FilterSliceState['selected'];

function useSetQueryParams( sortTypeValue: SortItem, categoryId: number, pagination: PaginationType, selected: SelectedFilters, isFirstMountRef: RefObject<boolean> ) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        // Параметры отображаются в строке запроса, когда поменяется одна из зависимостей

        if(!isFirstMountRef.current) {
            const query = qs.stringify({
                page: pagination.currentPage,
                limit: pagination.limit,
                categoryId,
                sortBy: sortTypeValue.sort,
                brand: selected.brandsChecked,
                type: selected.typesChecked
            }, { arrayFormat: 'brackets' });

            navigate(`?${query}`);

        }

        isFirstMountRef.current = false;
        
        
    }, [sortTypeValue, categoryId, pagination.currentPage, pagination.limit, selected]);

    const { data, error, isLoading } = useGetAllProductsQuery({
        sortTypeValue, 
        categoryId, 
        pagination: {
            currentPage: pagination.currentPage,
            limit: pagination.limit
        },
        selected
    });

    return { data, error, isLoading };

    // useEffect(() => {
    //     dispatch(
    //         fetchProducts({
    //             sortTypeValue, 
    //             categoryId, 
    //             pagination: {
    //                 currentPage: pagination.currentPage,
    //                 limit: pagination.limit
    //             },
    //             selected
    //         })
    //     );
        
    // }, [sortTypeValue, categoryId, pagination.currentPage, pagination.limit, selected]);
}

export default useSetQueryParams;