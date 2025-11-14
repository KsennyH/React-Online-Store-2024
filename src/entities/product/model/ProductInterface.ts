import { FilterSliceState, PaginationType, ProductVariant, SortItem } from "@/shared/model";

export interface ProductCardProps {
    product: Product;
    slot: React.ReactNode;
    selectedVariant: number;
    onSelectedVariant: (index: number) => void
}

export interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    variants: ProductVariant[]
}

export interface FetchProducts{
    meta: MetaProducts,
    items: Product[],
}

interface MetaProducts {
    current_page: number,
    per_page: number,
    remaining_count: number,  
    total_items: number,
    total_pages: number,
}

export type FetchProductsArgs = {
    categoryId: number;
    pagination: PaginationType,
    sortTypeValue: SortItem,
    selected: FilterSliceState['selected']
}