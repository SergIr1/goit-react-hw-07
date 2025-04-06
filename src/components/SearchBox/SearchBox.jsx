import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice.js';

export default function SearchBox() {
  const id = useId();
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.container}>
      <label className={css.textLabel} htmlFor={id}>
        Find contacts by name
      </label>

      <input
        className={css.input}
        placeholder="Please enter a name to search"
        type="text"
        value={filter}
        onChange={handleChange}
        id={id}
      />
    </div>
  );
}
