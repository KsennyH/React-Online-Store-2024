import { getParamsFromString } from "@/lib/getParamsFromString";
import { getFiltersValue, setQueryFromUrl } from "@/redux/filterSlice";
import { QueryParams } from "@/types/filterTypes";
import { useEffect, useRef } from "react";
import qs from 'qs';
import { useAppDispatch, useAppSelector } from "@/redux/store";
import useSetQueryParams from "@/hooks/useSetQueryParams";
import ProductsList from "./products/ProductsList";
import PaginationButtons from "./pagination/PaginationButtons";
import { useGetAllProductsQuery } from "@/api/product/productApi";

function Catalog() {

    const { sortTypeValue, categoryId, pagination, selected } = useAppSelector((state) => getFiltersValue(state));
    const isFirstMount = useRef(true);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        if(window.location.search) {
            const params: QueryParams = qs.parse(window.location.search.substring(1));
            const filters = getParamsFromString(params);
            dispatch(setQueryFromUrl(filters));
        }
        
    }, []);

    useSetQueryParams( sortTypeValue, categoryId, pagination, selected, isFirstMount );

    const { data, error, isLoading } = useGetAllProductsQuery({
        sortTypeValue, 
        categoryId, 
        pagination: {
            currentPage: pagination.currentPage,
            limit: pagination.limit
        },
        selected
    });

    if(error) {
        return <div style={{padding: 40 + 'px', display: 'flex', justifyContent: 'center' }}>Произошла ошибка: {String(error)}</div>
    }

    return(
        <>
            <ProductsList products={data?.items ?? []} isLoading={isLoading} />
            {data && data.meta.total_pages > 1 && (<PaginationButtons totalPages={data.meta.total_pages} />)}
        </>
        

    );
}

export default Catalog;