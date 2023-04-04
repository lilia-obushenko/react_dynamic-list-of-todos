import { FC } from 'react';
import { FilterType } from '../../types/FilterType';

interface Props {
  value: string,
  filterTypeValue: FilterType,
  onQueryChange: (query: string) => void
  onFilterType: (filterTypeValue: FilterType) => void
}

export const TodoFilter: FC<Props> = (props) => {
  const {
    value,
    filterTypeValue,
    onFilterType,
    onQueryChange,
  } = props;

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={filterTypeValue}
            onChange={({ target }) => {
              onFilterType(target.value as FilterType);
            }}
          >
            {Object.values(FilterType).map(option => (
              <option
                value={option}
                key={option}
              >
                {option.slice(0, 1).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          value={value}
          className="input"
          placeholder="Search..."
          onChange={({ target }) => {
            onQueryChange(target.value);
          }}
        />

        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        {value && (
          <span
            className="icon is-right"
            style={{ pointerEvents: 'all' }}
          >
            <button
              data-cy="clearSearchButton"
              aria-label="clear field"
              type="button"
              className="delete"
              onClick={() => onQueryChange('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};