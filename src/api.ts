import Axios from "axios"

import {ProductProps} from "./types";


export const api = {
    getProducts: async (): Promise<ProductProps[]> => {
        try {
            const response = await Axios.get(process.env.REACT_APP_BACKEND_URL + '/products');
            return response.data
        } catch (error) {
            throw Error("Unable to recover products from API.")
        }
    }
}
