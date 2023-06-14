import React from 'react';
import Select from 'react-select';
import './reactSelect.css';
import { setGenre } from '../../redux/slices/booksSlice';
import { useDispatch } from 'react-redux';

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: 'fiction', label: 'Fiction' },
  { value: 'aesthetics', label: 'Aesthetics' },
  { value: 'archaeology', label: 'Archaeology' },
  { value: 'art', label: 'Art' },
  { value: 'autobiography', label: 'Autobiography' },
  { value: 'biography', label: 'Biography' },
  { value: 'criticism & theory', label: 'Criticism & Theory' },
  { value: 'computers', label: 'Computers' },
  { value: 'design', label: 'Design' },
  { value: 'drama', label: 'Drama' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'horror', label: 'Horror' },
  { value: 'history', label: 'History' },
  { value: 'medical', label: 'Medical' },
  { value: 'memoir', label: 'Memoir' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'philosophy', label: 'Philosophy' },
  { value: 'poetry', label: 'Poetry' },
  { value: 'romance', label: 'Romance' },
  { value: 'science', label: 'Science' },
  { value: 'thriller', label: 'Thriller' },
];

const SelectGenres = () => {
  const dispatch = useDispatch();

  const handleChange = (selectedOption: Option | null) => {
    dispatch(setGenre(selectedOption));
  };
  return (
    <Select
      defaultValue={options[0]}
      onChange={handleChange}
      options={options}
      placeholder="select genre"
      classNamePrefix="react-select"
    />
  );
};
export default SelectGenres;
