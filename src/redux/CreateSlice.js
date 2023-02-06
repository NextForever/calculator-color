import { createSlice } from '@reduxjs/toolkit';

const selectedAreaSlice = createSlice({
    name: 'selectedArea',
    initialState: {
        selectedArea: null,
    },
    reducers: {
        setSelectedArea: (state, action) => {
            state.selectedArea = action.payload;
        },
    },
});

export const { setSelectedArea } = selectedAreaSlice.actions;
export default selectedAreaSlice.reducer;
