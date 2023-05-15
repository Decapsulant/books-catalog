import { createSlice } from '@reduxjs/toolkit';

type Option = {
  value: string;
  label: string;
};

interface FilterState {
  searchValue: string;
  genre: Option | null;
}
const initialState: FilterState = {
  searchValue: '',
  genre: {
    value: 'general',
    label: 'general',
  },
};

const filterSlice = createSlice({
  name: 'filter',
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
