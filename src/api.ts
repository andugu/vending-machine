import Axios, { AxiosInstance } from "axios"

import {ProductProps, UserProps} from "./types";

const axios: AxiosInstance = Axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    xsrfCookieName: "csrftoken",
    xsrfHeaderName: "X-CSRFTOKEN",
    withCredentials: true
});

export const api = {
    login: async (user_name: string): Promise<UserProps> => {
        try {
            const response = await axios.post('/login/', {"user_name": user_name});
            return response.data
        } catch (error) {
            throw Error("Unable to create or recover user from API.")
        }
    },
    logout: async (): Promise<void> => {
        try {
            await axios.get('/logout/');
        } catch (error) {
            throw Error("Unable to logout.")
        }
    },
    getProducts: async (): Promise<ProductProps[]> => {
        try {
            const response = await axios.get('/products/');
            return response.data
        } catch (error) {
            throw Error("Unable to recover products from API.")
        }
    },
    buy: async (product_id: string): Promise<void> => {
        try {
            const response = await axios.post('/buy/', {"id": product_id});
            return response.data
        } catch (error) {
            throw Error(`Unable to buy product in API: ${error}`)
        }
    },
    patchBalance: async (user_id: string, new_balance: number): Promise<void> => {
        try {
            await axios.patch(`/profile/${user_id}`, {"balance": new_balance})
        } catch (error) {
            throw Error(`Unable to update balance for user with id: ${user_id}.`)
        }
    }
}
