import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';


const store = configureStore({
    reducer: {
        counter: counterSlice
    }
});

store.subscribe(() => console.log(store.getState()))

export default store;