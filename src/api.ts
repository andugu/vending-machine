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
    },
    patchBalance: async (user_id: string, new_balance: number): Promise<void> => {
        try {
            await Axios.patch(process.env.REACT_APP_BACKEND_URL + `/profile?id=${user_id}`, {"balance": new_balance})
        } catch (error) {
            throw Error(`Unable to update balance for user with id: ${user_id}.`)
        }
    }
}
