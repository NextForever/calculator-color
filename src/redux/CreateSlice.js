import { createSlice } from '@reduxjs/toolkit';

const selectedAreaSlice = createSlice({
    name: 'selectedArea',
    initialState: {
        selectedAreaParts: [],
    },
    reducers: {
        setSelectedArea: (state, action) => {
            if (!state.selectedAreaParts.includes(action.payload)) {
                state.selectedAreaParts.push(action.payload);
            } else {
                state.selectedAreaParts = state.selectedAreaParts.filter(
                    area => area !== action.payload,
                );
            }
        },
        clearSelectedArea: state => {
            state.selectedAreaParts = [];
        },
    },
});

export const { setSelectedArea, clearSelectedArea } = selectedAreaSlice.actions;
export default selectedAreaSlice.reducer;
