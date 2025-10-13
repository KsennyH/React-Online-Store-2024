import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import CatalogPage from "@/pages/catalog-page/CatalogPage";
import { lazy, Suspense } from "react";

const SingleProductPage = lazy(() => import ('@/pages/catalog-page/single/SingleProductPage'));
const ServicesPage = lazy(() => import ('@/pages/ServicesPage'));
const ContactPage = lazy(() => import ('@/pages/ContactPage'));
const CartPage = lazy(() => import ('@/pages/cart/CartPage'));


export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            { index: true, Component: CatalogPage },
            { 
                path: 'products/:id',
                element: 
                    <Suspense fallback='Loading'>
                        <SingleProductPage />
                    </Suspense>
            },
            { 
                path: 'services', 
                element: 
                    <Suspense fallback='Loading'>
                        <ServicesPage />
                    </Suspense>
            },
            { 
                path: 'contacts', 
                element: 
                    <Suspense fallback='Loading'>
                        <ContactPage /> 
                    </Suspense>
            },
            { 
                path: 'cart', 
                element: 
                    <Suspense fallback='Loading'>
                        <CartPage />
                    </Suspense>
            }
        ]
    }
]);