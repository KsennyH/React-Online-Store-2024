import { Category } from '@/components/post-category/PostCategories';
import { Post } from '@/components/post/Post';
import { Tag } from '@/components/tags/Tags';
import { SinglePost } from '@/pages/post/ui/PostPage/PostPage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
        getAllNews: build.query<Post[],void>({
            query: () =>  `news?select=id,title,intro,created_at,image,authors(name)`,
        }),
        getLatestNews: build.query<Post[],void>({
            query: () => `news?select=id,title,intro,created_at,image&order=created_at.desc&limit=6`
        }),
        getSingleNews: build.query<SinglePost,string>({
            query: (id:string) => `news?id=eq.${id}&select=id,title,intro,created_at,image,content,authors(name),categories(id,name)`,
            transformResponse: (response: SinglePost[]) => response[0],
        }),
        getCategories: build.query<Category[],void>({
            query: () => `categories?select=id,name,news(id)`
        }),
        getTags: build.query<Tag[],void>({
            query: () => `tags?select=id,name`
        })
    })
});

export const { useGetAllNewsQuery, useGetCategoriesQuery, useGetTagsQuery, useGetLatestNewsQuery, useGetSingleNewsQuery } = newsApi;
