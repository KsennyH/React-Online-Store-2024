import { PaginationType, SortItem } from "@/redux/filterSlice";
import { fetchProducts } from "@/redux/productsSlice";
import { useAppDispatch } from "@/redux/store";
import qs from 'qs';
import { RefObject, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useSetQueryParams( sortTypeValue: SortItem, categoryId: number, pagination: PaginationType, isFirstMountRef: RefObject<boolean> ) {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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

        // Параметры отображаются в строке запроса, когда поменяется одна из зависимостей

        if (!isFirstMountRef.current) {
            const query = qs.stringify({
                page: pagination.currentPage > 1 ? pagination.currentPage : {},
                limit: pagination.currentPage > 1 ? pagination.limit : {},
                categoryId,
                sortBy: sortTypeValue.sort
            });
            
            navigate(`?${query}`);
        }
        isFirstMountRef.current = false;
        
    }, [sortTypeValue, categoryId, pagination]);
}

export default useSetQueryParams;