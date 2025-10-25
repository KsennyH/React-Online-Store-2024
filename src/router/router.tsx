import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import CatalogPage from "@/pages/catalog-page/CatalogPage";
import { lazy } from "react";

const SingleProductPage = lazy(() => import ('@/pages/catalog-page/single/SingleProductPage'));
const ServicesPage = lazy(() => import ('@/pages/services/ServicesPage'));
const ContactPage = lazy(() => import ('@/pages/contacts/ContactPage'));
const CartPage = lazy(() => import ('@/pages/cart/CartPage'));
const Articles = lazy(() => import ('@/pages/blog/Articles'));
const SingleArticle = lazy(() => import('@/pages/blog/single/SingleArticle'));
const CheckoutPage = lazy(() => import('@/pages/checkout/CheckoutPage'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <CatalogPage /> },
            { 
                path: 'products/:id',
                element: <SingleProductPage />
            },
            { 
                path: 'blog', 
                element: <Articles />
            },
            {
                path: 'blog/:id',
                element: <SingleArticle />
            },
            { 
                path: 'services', 
                element: <ServicesPage />
            },
            { 
                path: 'contacts', 
                element: <ContactPage /> 
            },
            { 
                path: 'cart', 
                element: <CartPage />,
            },
            {
                path: 'checkout',
                element: <CheckoutPage />
            }
        ],
    },
],);