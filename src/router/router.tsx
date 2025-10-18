import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import CatalogPage from "@/pages/catalog-page/CatalogPage";
import { lazy } from "react";
import { fetchSingleProduct } from "@/api/product";

const SingleProductPage = lazy(() => import ('@/pages/catalog-page/single/SingleProductPage'));
const ServicesPage = lazy(() => import ('@/pages/ServicesPage'));
const ContactPage = lazy(() => import ('@/pages/ContactPage'));
const CartPage = lazy(() => import ('@/pages/cart/CartPage'));
const Articles = lazy(() => import ('@/pages/blog/Articles'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <CatalogPage /> },
            { 
                path: 'products/:id',
                loader: async ({ params }) => {
                    const product = await fetchSingleProduct(params.id!);
                    return { product };
                },
                element: <SingleProductPage />
            },
            { 
                path: 'blog', 
                element: <Articles />
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
                element: <CartPage />
            }
        ],
    },
],);