import { SortItem } from "@/shared/model";
import { CheckboxVariants } from "./types";

export const SORT_OPTIONS: SortItem[] = [{name: 'цене', sort: 'price'}, {name: 'популярности', sort: 'rating'}, {name: 'алфавиту', sort: 'title'}];

export const CHECKBOX_VARIANTS: CheckboxVariants = {
    typesMoto: ['Спортивный', 'Дорожный', 'Эндуро', 'Питбайк'],
    brands: [ 'DUCATI', 'HONDA', 'KAWASAKI', 'KTM', 'SUZUKI', 'YAMAHA' ]
}





