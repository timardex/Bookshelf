import React from 'react';
import './style.scss'

interface Props {
  bookshelf: Array<any>,
  type: string,
  setSelectedFilter: Function
}

const BookFilterType: React.FC<Props> = (props: Props) => {
  const {bookshelf, type, setSelectedFilter} = props;
  const replaceChar = (item: string): any => {
    return item.replace(/ /g, "-").toLowerCase()
  }

  return (
    <ul className={`book-filter ${type}`}>
      {bookshelf.map((value: any, key: any) => {
          return (
          <li key={key} className="filter-handler">
            <input type="radio" name="radio" value={value} id={replaceChar(value)} onChange={() => setSelectedFilter(value)}/>
            <label htmlFor={replaceChar(value)}>{value}</label>
          </li>
          )
      })}
    </ul>
  )
}

export default BookFilterType;