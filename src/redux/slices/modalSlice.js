import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
    name: 'modal',
    initialState: { 
        stateModal: false
    },
    reducers: {
        dispatch_toogleModal: (state, action) => {
            state.stateModal = !state?.stateModal
        },
    }
});

export const { dispatch_toogleModal } = modalSlice.actions; // action générée automatiquement
export default modalSlice.reducer; 