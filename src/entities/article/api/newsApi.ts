import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PostInterface, SinglePostInterface } from '@/entities/article/model';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${import.meta.env.VITE_SUPABASE_URL}/rest/v1/`,
        prepareHeaders: (headers) => {
            headers.set('apikey', import.meta.env.VITE_SUPABASE_ANON_KEY);
            headers.set('Authorization', `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`);
            return headers;
        },
    }),
    endpoints: (build) => ({
        getAllNews: build.query<PostInterface[],void>({
            query: () =>  `news?select=id,title,intro,created_at,image,authors(name)`,
        }),
        getLatestNews: build.query<PostInterface[],void>({
            query: () => `news?select=id,title,intro,created_at,image&order=created_at.desc&limit=6`
        }),
        getSingleNews: build.query<SinglePostInterface,string>({
            query: (id:string) => `news?id=eq.${id}&select=id,title,intro,created_at,image,content,authors(name),categories(id,name)`,
            transformResponse: (response: SinglePostInterface[]) => response[0],
        }),
    })
});

export const { useGetAllNewsQuery, useGetLatestNewsQuery, useGetSingleNewsQuery } = newsApi;
