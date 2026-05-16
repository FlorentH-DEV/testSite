import { createSlice } from '@reduxjs/toolkit';

export const shopSlice = createSlice({
    name: 'shop',
    initialState: { 
        shopSelected: {}
    },
    reducers: {
        dispatch_shopSelected: (state, action) => {
            state.shopSelected = {...action?.payload}
        },
    }
});

export const { dispatch_shopSelected } = shopSlice.actions; // action générée automatiquement
export default shopSlice.reducer; 