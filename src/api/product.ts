import { Product } from "@/types/productTypes";
import axios from "axios";

export const fetchSingleProduct = async (id: string): Promise<Product> => {
    try {
        // const {data} = await axios.get<Product>(`https://665b3a2e003609eda4604130.mockapi.io/products/${id}`);
        const {data} = await axios.get<Product>(`https://7dad84242a49210a.mokky.dev/products/${id}`);
        return data;
    } catch (err) {
        throw new Error("Ошибка загрузки продукта");
    }
}

