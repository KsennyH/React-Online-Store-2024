import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";

export type SortItem = {
    name: string;
    sort: 'price' | 'rating' | 'title';
}

export type PaginationType = {
    currentPage: number,
    limit: number
}

export enum FilterKey {
  TYPES = "typesChecked",
  BRANDS = "brandsChecked",
}

type CheckboxGroupKey = keyof Pick<
  FilterSliceState['selected'],
  FilterKey.TYPES | FilterKey.BRANDS
>;

interface SetCheckedPayload {
  key: CheckboxGroupKey;
  values: string[];
}

export interface FilterSliceState {
    categoryId: number;
    sortTypeValue: SortItem;
    pagination: PaginationType;
    selected: {
        typesChecked: string[];
        brandsChecked: string[];   
    }
}

const initialState: FilterSliceState = {
    categoryId: 0,
    sortTypeValue: {
        name: "цене",
        sort: "price"
    },
    pagination: {
        currentPage: 1,
        limit: 9
    },
    selected: {
        typesChecked: [],
        brandsChecked: []
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload;
        },
        setSortType: (state, action: PayloadAction<SortItem>) => {
            state.sortTypeValue = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<PaginationType>) => {
            state.pagination = action.payload;
        },
        setQueryFromUrl: (state, action: PayloadAction<FilterSliceState>) => {
            const { categoryId, sortTypeValue, pagination, selected } = action.payload;
            if (categoryId !== undefined) {
                state.categoryId = categoryId;
            }
            if (sortTypeValue !== undefined) {
                state.sortTypeValue = sortTypeValue;
            }
            if (pagination !== undefined) {
                state.pagination = {
                    ...state.pagination,
                    ...action.payload.pagination
                };
            }
            if (selected !== undefined) {
                state.selected = {
                    ...state.selected,
                    ...action.payload.selected
                };
            } 
        },
        // setSearchValue: (state, action: PayloadAction<string>) => {
        //     state.value = action.payload;
        // },
        setSelectedFilters: (state, action: PayloadAction<SetCheckedPayload>) => {
            state.selected[action.payload.key] = action.payload.values
        }
    }
})

export const { setSortType, setCategoryId, setSelectedFilters, setCurrentPage, setQueryFromUrl } = filterSlice.actions;

export const getFiltersValue = (state: RootState) => state.filter;

export default filterSlice.reducer;