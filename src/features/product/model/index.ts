export type { SetCheckedPayload, SearchSliceState, CheckboxFilterBlockProps, SearchOpenProps, CheckboxVariants } from './types';

export { setSortType, setCategoryId, setSelectedFilters, setCurrentPage, setQueryFromUrl } from './filterSlice';
export { getFiltersValue, getCategory, getSort, getPagination, getSearchValue } from './filterSelectors';

export { searchValueAdded } from './searchSlice';

export { FilterKey } from './types';

export { SORT_OPTIONS, CHECKBOX_VARIANTS } from './constants';

export { default as filterReducer } from './filterSlice';
export { default as searchReducer } from './searchSlice';
