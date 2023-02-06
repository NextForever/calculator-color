import { configureStore } from '@reduxjs/toolkit';
import selectedAreaSlice from './CreateSlice';

const store = configureStore({
    reducer: {
        selectedArea: selectedAreaSlice,
    },
});

export default store;
