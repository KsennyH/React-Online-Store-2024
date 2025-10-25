import { FilterSliceState, PaginationType, SortItem } from "./filterTypes";

type MetaProducts = {
    current_page: number,
    per_page: number,
    remaining_count: number,  
    total_items: number,
    total_pages: number,
}

export type Product = {
    id: number;
    img: string;
    title: string;
    price: number;
    variants: ProductVariant[]
}

export type ProductVariant = {
    article: string,
    available: boolean, 
    color: string,
    images: string[],
    stock: number
}

export interface FetchProducts{
    meta: MetaProducts,
    items: Product[],
}

export type FetchProductsArgs = {
    categoryId: number;
    pagination: PaginationType,
    sortTypeValue: SortItem,
    selected: FilterSliceState['selected']
}