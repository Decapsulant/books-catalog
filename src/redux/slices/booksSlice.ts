import { createSlice } from '@reduxjs/toolkit';

type Option = {
  value: string;
  label: string;
};

interface BooksState {
  searchValue: string;
  genre: Option | null;
}
const initialState: BooksState = {
  searchValue: '',
  genre: {
    value: 'fiction',
    label: 'fiction',
  },
};

const filterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchInput: (state, action) => {
      state.searchValue = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setSearchInput, setGenre } = filterSlice.actions;

export default filterSlice.reducer;
