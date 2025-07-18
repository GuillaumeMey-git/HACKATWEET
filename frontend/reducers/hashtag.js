import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: { hashtag: null },
};

export const hashtagSlice = createSlice({
    name: 'hashtag',
    initialState,
    reducers: {
        add: (state, action) => {
            console.log('add: ',action.payload)
            state.value.hashtag = action.payload;
        },
        delete: (state,action) => {
            console.log('delete: ', )
            state.value.hashtag = null;

        },
    },
});

export const { add } = hashtagSlice.actions;
export default hashtagSlice.reducer;
