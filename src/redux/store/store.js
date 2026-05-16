// store.js
import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../slices/shopSlice'; // <-- on importe le reducer par défaut

export const store = configureStore({
  reducer: {
    shop: shopReducer 
  },
});
