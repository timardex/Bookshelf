import React from 'react';
import './style.scss'

interface Props {
  bookshelf: Array<any>,
  type: string,
  setSelectedFilter: Function,
  selectedFilter: string
}

const FilterType: React.FC<Props> = (props: Props) => {
  const {bookshelf, type, setSelectedFilter, selectedFilter} = props;
  
  return (
    <ul className={`book-filter ${type}`}>
      {bookshelf.map((value: any, key: any) => {
          return (
          <li key={key} className={`filter-handler ${selectedFilter === value ? 'active' : ''}`} onClick={() => setSelectedFilter(value)}>
            {value}
          </li>
          )
      })}
    </ul>
  )
}

export default FilterType;