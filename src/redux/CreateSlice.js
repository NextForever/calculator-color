import { createSlice } from '@reduxjs/toolkit';

const selectedAreaSlice = createSlice({
    name: 'selectedArea',
    initialState: {
        selectedArea: null,
        arrayParts: [],
    },
    reducers: {
        setSelectedArea: (state, action) => {
            state.selectedArea = action.payload;
            state.arrayParts.push(action.payload);
        },
        clearSelectedArea: state => {
            state.selectedArea = null;
            state.arrayParts = [];
        },
    },
});

export const { setSelectedArea, clearSelectedArea } = selectedAreaSlice.actions;
export default selectedAreaSlice.reducer;
