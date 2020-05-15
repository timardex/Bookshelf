import React from 'react';

import './style.scss'

interface Props {
  setSelectedFilter: Function
}

const BookSorter: React.FC<Props> = (props: Props) => {
  const {setSelectedFilter} = props;
  
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
            <li key={key} className="filter-handler">
              <input type="radio" name="radio" value={value} id={key} onChange={() => setSelectedFilter(value)}/>
              <label htmlFor={key}>{value}</label>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BookSorter;