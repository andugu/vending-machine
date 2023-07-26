import Axios from "axios"

import {ProductProps, UserProps} from "./types";

export const api = {
    login: async (user_name: string): Promise<UserProps> => {
        try {
            const response = await Axios.post(process.env.REACT_APP_BACKEND_URL + '/login', {"user_name": user_name});
            return response.data
        } catch (error) {
            throw Error("Unable to create or recover user from API.")
        }
    },
    logout: async (): Promise<void> => {
        try {
            await Axios.get(process.env.REACT_APP_BACKEND_URL + '/logout');
        } catch (error) {
            throw Error("Unable to logout.")
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
    buy: async (product_id: string): Promise<void> => {
        try {
            const response = await Axios.post(process.env.REACT_APP_BACKEND_URL + '/buy', {"id": product_id});
            return response.data
        } catch (error) {
            throw Error(`Unable to buy product in API: ${error}`)
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
