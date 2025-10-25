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

export interface SetCheckedPayload {
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

export interface QueryParams {
  page?: string;
  limit?: string;
  sortBy?: string;
  categoryId?: string;
  brand?: string | string[]; 
  type?: string | string[]; 
}