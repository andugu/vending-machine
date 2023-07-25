import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {UserProps} from "../types";

const initialState: UserProps = {
    user_name: null,
    full_name: null,
    balance: null
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string | null>) => {
            state.user_name = action.payload
        },
        setFullName: (state, action: PayloadAction<string | null>) => {
            state.full_name = action.payload
        },
        updateBalance: (state, action: PayloadAction<number | null>) => {
            state.balance = action.payload
        }
    }
});

export const { setUserName, setFullName, updateBalance } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
