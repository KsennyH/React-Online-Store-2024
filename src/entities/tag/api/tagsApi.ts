import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ArticleTagInterface } from '@/entities/tag/model';

export const tagsApi = createApi({
    reducerPath: 'tagsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/`,
        prepareHeaders: (headers) => {
            headers.set('apikey', import.meta.env.VITE_SUPABASE_ANON_KEY);
            headers.set('Authorization', `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`);
            return headers;
        },
    }),
    endpoints: (build) => ({
        getTags: build.query<ArticleTagInterface[],void>({
            query: () => `tags?select=id,name`
        })
    })
});

export const { useGetTagsQuery } = tagsApi;
