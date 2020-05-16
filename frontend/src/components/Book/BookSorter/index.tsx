import React from 'react';

import './style.scss'

interface Props {
  setSelectedFilter: Function,
  selectedFilter: string
}

const BookSorter: React.FC<Props> = (props: Props) => {
  const {setSelectedFilter, selectedFilter} = props;
  
  const sorterType = [
    'Book name ASC',
    'Book name DESC',
    'Author name ASC',
    'Author name DESC',
  ] as Array<string>

  return (
    <nav>
      <ul className="sorter-type">
        {sorterType.map((value: string, key: any) => {
          return (
            <li key={key} className={`filter-handler ${selectedFilter === value ? 'active' : ''}`} onClick={() => setSelectedFilter(value)}>
              {value}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BookSorter;