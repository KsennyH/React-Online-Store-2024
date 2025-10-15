import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store";

export type SortItem = {
    name: string;
    sort: 'price' | 'rating' | 'title';
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

interface FilterSliceState {
    categoryId: number;
    sortTypeValue: SortItem;
    // currentPage: number;
    // value: string;
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
    // currentPage: 1,
    // value: '',
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
        // setCurrentPage: (state, action: PayloadAction<number>) => {
        //     state.currentPage = action.payload;
        // },
        // setFilters: (state, action: PayloadAction<FilterSliceState>) => {
        //     const {categoryId, sortType, currentPage, value, types} = action.payload;
        //     state.categoryId = categoryId;
        //     state.sortType = sortType;
        //     state.currentPage = currentPage;
        //     state.value = value;
        //     state.types = types;
        // },
        // setSearchValue: (state, action: PayloadAction<string>) => {
        //     state.value = action.payload;
        // },
        setSelectedFilters: (state, action: PayloadAction<SetCheckedPayload>) => {
            state.selected[action.payload.key] = action.payload.values
        }
        // setTypesChecked: (state, action: PayloadAction<string[]>) => {
        //     state.typesChecked = action.payload;
        // },
        // setBrandsChecked: (state, action: PayloadAction<string[]>) => {
        //     state.brandsChecked = action.payload;
        // },
    }
})

// export const { setCategoryId, setSortType, setCurrentPage, setFilters, setSearchValue, setTypes } = filterSlice.actions;
export const { setSortType, setCategoryId, setSelectedFilters } = filterSlice.actions;

export const getFiltersValue = (state: RootState) => state.filter;

export default filterSlice.reducer;