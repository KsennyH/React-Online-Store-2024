export interface FilterSliceState {
    categoryId: number;
    sortTypeValue: SortItem;
    pagination: PaginationType;
    selected: {
        typesChecked: string[];
        brandsChecked: string[];   
    }
}

export type SortItem = {
    name: string;
    sort: 'price' | 'rating' | 'title';
}

export type PaginationType = {
    currentPage: number,
    limit: number
}

