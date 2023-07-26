import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import {UserProps} from "../types";

const initialState: UserProps = {
    id: null,
    user_name: null,
    balance: null
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string | null>) => {
            state.id = action.payload
        },
        setUserName: (state, action: PayloadAction<string | null>) => {
            state.user_name = action.payload
        },
        updateBalance: (state, action: PayloadAction<number | null>) => {
            state.balance = action.payload
        },
        resetState: (state) => {
            state.id = initialState.id;
            state.user_name = initialState.user_name;
            state.balance = initialState.balance;
        }
    }
});

export const { setUserId, setUserName, updateBalance, resetState } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
