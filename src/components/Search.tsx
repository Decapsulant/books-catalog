import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchInput } from '../redux/slices/booksSlice';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { debounce } from 'lodash';

export const Search = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);

  /** this function is needed for optimisation http requests not to make so many requiest on API*/
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setSearchInput(str));
    }, 300),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const clearInput = () => {
    setValue('');
    dispatch(setSearchInput(''));
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <label className=" bg-white w-72 flex items-center gap-5 px-2 border-1  py-1 rounded">
      <BiSearch className="pl-1" opacity="0.5" fontSize="20px" color="#2c1810" />
      <input
        ref={inputRef}
        className="text-dark outline-none pr-5  w-60"
        value={value}
        onChange={onChangeInput}
        type="text"
        placeholder="search books..."
      />
      {value.length >= 1 && (
        <AiOutlineClose
          onClick={clearInput}
          className="pr-1 hover:opacity-100 transition-all duration-500"
          cursor="pointer"
          fontSize="20px"
          color="#2c1810"
          opacity="0.5"
        />
      )}
    </label>
  );
};
