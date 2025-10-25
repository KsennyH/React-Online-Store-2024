import { FilterSliceState, PaginationType, SortItem } from "@/types/filterTypes";
import qs from 'qs';
import { RefObject, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type SelectedFilters = FilterSliceState['selected'];

function useSetQueryParams( sortTypeValue: SortItem, categoryId: number, pagination: PaginationType, selected: SelectedFilters, isFirstMountRef: RefObject<boolean> ) {

    const navigate = useNavigate();

    useEffect(() => {

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
}

export default useSetQueryParams;