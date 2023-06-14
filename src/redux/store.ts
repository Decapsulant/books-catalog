import { configureStore } from '@reduxjs/toolkit';
import books from './slices/booksSlice';

const store = configureStore({
  reducer: {
    books,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
