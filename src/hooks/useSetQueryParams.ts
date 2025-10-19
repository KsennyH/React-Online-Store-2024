import { PaginationType, SortItem } from "@/redux/filterSlice";
import { fetchProducts } from "@/redux/productsSlice";
import { useAppDispatch } from "@/redux/store";
import qs from 'qs';
import { RefObject, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function useSetQueryParams( sortTypeValue: SortItem, categoryId: number, pagination: PaginationType, isFirstMountRef: RefObject<boolean> ) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        // Параметры отображаются в строке запроса, когда поменяется одна из зависимостей

        if(!isFirstMountRef.current) {
            const query = qs.stringify({
                page: pagination.currentPage,
                limit: pagination.limit,
                categoryId,
                sortBy: sortTypeValue.sort
            });

            navigate(`?${query}`);

        }

        isFirstMountRef.current = false;
        
        
    }, [sortTypeValue, categoryId, pagination.currentPage, pagination.limit]);

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
}

export default useSetQueryParams;