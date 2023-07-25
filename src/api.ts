import Axios from "axios"

import {ProductProps, UserProps} from "./types";

export const api = {
    getUser: async (user_name: string): Promise<UserProps> => {
        try {
            const response = await Axios.post(process.env.REACT_APP_BACKEND_URL + '/login', {"user_name": user_name});
            return response.data
        } catch (error) {
            throw Error("Unable to create or recover user from API.")
        }
    },
    getProducts: async (): Promise<ProductProps[]> => {
        try {
            const response = await Axios.get(process.env.REACT_APP_BACKEND_URL + '/products');
            return response.data
        } catch (error) {
            throw Error("Unable to recover products from API.")
        }
    }
}
