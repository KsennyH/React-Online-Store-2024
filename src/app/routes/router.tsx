import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Account } from "@/components/account/Account";
import { MainLayout } from "../layout/MainLayout";
import { Loader } from "@/shared";

const SingleProductPage = lazy(() => import ('@/pages/product'));
const ServicesPage = lazy(() => import ('@/pages/services'));
const ContactsPage = lazy(() => import ('@/pages/contacts'));
const CartPage = lazy(() => import ('@/pages/cart'));
const ArticlesPage = lazy(() => import ('@/pages/articles'));
const PostPage = lazy(() => import('@/pages/post'));
const CheckoutPage = lazy(() => import('@/pages/checkout/CheckoutPage'));
const MainPage = lazy(() => import('@/pages/home'));
const CatalogPage = lazy(() => import('@/pages/catalog'));
const ProfilePage = lazy(() => import('@/pages/profile/ProfilePage'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <MainPage /> },
            {
                path: 'products',
                element: <Suspense fallback={<Loader />}><CatalogPage /></Suspense>
            },
            { 
                path: 'products/:id',
                element: <Suspense fallback={<Loader />}><SingleProductPage /></Suspense>
            },
            { 
                path: 'blog', 
                element: <Suspense fallback={<Loader />}><ArticlesPage /></Suspense>
            },
            {
                path: 'blog/:id',
                element: <Suspense fallback={<Loader />}><PostPage /></Suspense>
            },
            { 
                path: 'services', 
                element: <Suspense fallback={<Loader />}><ServicesPage /></Suspense>
            },
            { 
                path: 'contacts', 
                element: <Suspense fallback={<Loader />}><ContactsPage /> </Suspense>
            },
            { 
                path: 'cart', 
                element: <Suspense fallback={<Loader />}><CartPage /></Suspense>
            },
            {
                path: 'checkout',
                element: <Suspense fallback={<Loader />}><CheckoutPage /></Suspense>
            }
        ],
    },
    {
        path: '/account',
        element: <Account />,
        children: [
            { index: true, element: <ProfilePage /> },
        ]
    }
],);