import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchData} from './inputAPI';

const initialState = {
    query: 'react',
    repos: [],
    page: 1,
    status: 'idle',
    totalCount: 0,
};

export const fetchDataAsync = createAsyncThunk(
    'input/fetchData',
    async ({query, page}) => {
        const response = await fetchData(query, page);
        return {data: response.data, query};
    }
);

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setCurrentPage: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.page = action.payload;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        setNewQuery: (state, action) => {
            state.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.repos = action.payload.data.items;
                state.totalCount = action.payload.data.total_count;
                state.query = action.payload.query;
            });
    },
});

export const {setCurrentPage, setNewQuery} = inputSlice.actions;

export default inputSlice.reducer;
