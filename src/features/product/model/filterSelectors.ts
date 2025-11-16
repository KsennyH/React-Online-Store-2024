export const getFiltersValue = (state: RootState) => state.filter;
export const getCategory = (state: RootState) => state.filter.categoryId;
export const getSort = (state: RootState) => state.filter.sortTypeValue;
export const getPagination = (state: RootState) => state.filter.pagination;
export const getSearchValue = (state: RootState) => state.search.searchValue;