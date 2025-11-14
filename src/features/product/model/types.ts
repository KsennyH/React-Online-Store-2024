import { FilterSliceState } from "@/shared/model";

export interface SetCheckedPayload {
  key: CheckboxGroupKey;
  values: string[];
}

type CheckboxGroupKey = keyof Pick<
  FilterSliceState['selected'],
  FilterKey.TYPES | FilterKey.BRANDS
>;

export enum FilterKey {
  TYPES = "typesChecked",
  BRANDS = "brandsChecked",
}

export interface SearchSliceState {
    searchValue: string,
}

export interface CheckboxFilterBlockProps {
    headers: string[];
    title: string;
    typesChecked: string[];
    handleCheckboxChange: (value: string, checked: boolean, key: "typesChecked" | "brandsChecked" ) => void;
}

export type SearchOpenProps = {
    handleClick: () => void
}

export interface CheckboxVariants {
    typesMoto: string[],
    brands: string[]
}

export interface SetCheckedPayload {
  key: CheckboxGroupKey;
  values: string[];
}