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
        }
    }
});

export const { setUserId, setUserName, updateBalance } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
