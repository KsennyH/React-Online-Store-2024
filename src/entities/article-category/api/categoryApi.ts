import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArticleCategoryInterface } from '@/entities/article-category/model';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/`,
        prepareHeaders: (headers) => {
            headers.set('apikey', import.meta.env.VITE_SUPABASE_ANON_KEY);
            headers.set('Authorization', `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`);
            return headers;
        },
    }),
    endpoints: (build) => ({
        getCategories: build.query<ArticleCategoryInterface[],void>({
            query: () => `categories?select=id,name,news(id)`
        }),
    })
});

export const { useGetCategoriesQuery } = categoryApi;
