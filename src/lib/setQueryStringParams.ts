import { FilterSliceState, PaginationType, SortItem } from "@/shared/model";

export const setQueryStringParams = (sortTypeValue: SortItem, categoryId: number, pagination: PaginationType, selected: FilterSliceState['selected']) => {
    
    const queryString = new URLSearchParams();

    categoryId && queryString.append('categories[]', String(categoryId));
    sortTypeValue && queryString.append('sortBy', sortTypeValue.sort);
    pagination.currentPage && queryString.append('page', String(pagination.currentPage));
    pagination.limit && queryString.append('limit', String(pagination.limit));
    selected.brandsChecked.forEach((brand) => {
        queryString.append('brand[]', brand); 
    });
    selected.typesChecked.forEach((type) => {
        queryString.append('type[]', type);
    });

    return queryString;
}