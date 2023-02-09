import {configureStore} from '@reduxjs/toolkit';
import inputReducer from '../components/Input/inputSlice';

export const store = configureStore({
    reducer: {
        input: inputReducer,
    },
});
