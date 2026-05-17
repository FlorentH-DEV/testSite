// store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../slices/modalSlice'; // <-- on importe le reducer par défaut

export const store = configureStore({
  reducer: {
    modal: modalReducer 
  },
});
