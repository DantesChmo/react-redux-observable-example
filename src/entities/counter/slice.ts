import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: {}
    },
    reducers: {
        request(state) {},
        populate(state, action) {
            state.data = action.payload;
        }
    }
});

export {
    counterSlice
};
