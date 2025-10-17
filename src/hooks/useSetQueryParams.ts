import { PaginationType, SortItem } from "@/redux/filterSlice";
import { fetchProducts } from "@/redux/productsSlice";
import { useAppDispatch } from "@/redux/store";
import qs from 'qs';
import { RefObject, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function useSetQueryParams( sortTypeValue: SortItem, categoryId: number, pagination: PaginationType, isFirstMountRef: RefObject<boolean>, isSearchLoaded: boolean ) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const prevQueryRef = useRef('');

    useEffect(() => {
        dispatch(
            fetchProducts({
                sortTypeValue, 
                categoryId, 
                pagination: {
                    currentPage: pagination.currentPage,
                    limit: pagination.limit
                }
            })
        );
    }, [sortTypeValue, categoryId, pagination.currentPage, pagination.limit]);

    useEffect(() => {

        // Параметры отображаются в строке запроса, когда поменяется одна из зависимостей
        if (!isSearchLoaded) return;

        const query = qs.stringify({
            page: pagination.currentPage > 1 ? pagination.currentPage : {},
            limit: pagination.currentPage > 1 ? pagination.limit : {},
            categoryId,
            sortBy: sortTypeValue.sort
        });

        if (!isFirstMountRef.current && prevQueryRef.current !== query) {
            navigate(`?${query}`);
        }
        prevQueryRef.current = query;

        isFirstMountRef.current = false;
        
    }, [sortTypeValue, categoryId, pagination.currentPage, pagination.limit]);
}

export default useSetQueryParams;