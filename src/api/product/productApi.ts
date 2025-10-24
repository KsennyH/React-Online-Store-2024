import { setQueryStringParams } from '@/lib/setQueryStringParams';
import { FetchProducts, FetchProductsArgs, Product } from '@/types/productTypes';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://7dad84242a49210a.mokky.dev/" }),
    endpoints: (build) => ({
        getAllProducts: build.query<FetchProducts,FetchProductsArgs>({ 
            query: ({ sortTypeValue, categoryId, pagination, selected }) => {
                const queryString = setQueryStringParams(sortTypeValue, categoryId, pagination, selected);
                return `products?${queryString.toString()}`
            }
        }),
        getSearchProducts: build.query<Product[],string>({
            query: (value: string) => {
                return `products?title=${value}*`
            }
        })
    })
});

export const { useGetAllProductsQuery, useGetSearchProductsQuery } = productApi;