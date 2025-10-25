import { SORT_OPTIONS } from "@/constants/sortOptions";
import { normalizeToArray } from "./normalizeToArray";
import { QueryParams } from "@/types/filterTypes";

export const getParamsFromString = (params: QueryParams) => {
    const sortItem = SORT_OPTIONS.find((s) => s.sort === params.sortBy) || SORT_OPTIONS[0];
    return {
        categoryId: Number(params.categoryId) || 0,
        pagination: {
            currentPage: Number(params.page) || 1,
            limit: Number(params.limit) || 9,
        },
        sortTypeValue: sortItem,
        selected: {
            brandsChecked: normalizeToArray(params.brand),
            typesChecked: normalizeToArray(params.type)
        }
    }
}