import React from 'react';
import FilterType from './FilterType';

import './style.scss'

interface Props {
  bookshelf: Array<any>,
  setSelectedFilter: Function
}

const getUniques = (filterType: Array<any>): any => {
  return filterType.filter((el: any, index: any, self: any) => {
    return index === self.indexOf(el)
  })
}

const BookFilter: React.FC<Props> = (props: Props) => {
  const {bookshelf, setSelectedFilter} = props;

  const filterByGenre = ():any => {
    return bookshelf.map((value: any) => {
      return value.genre
    })
  }

  const filterByAuthor = ():any => {
    return bookshelf.map((value: any) => {
      return value.author.name
    })
  }

  const filterByAuthorGender = ():any => {
    return bookshelf.map((value: any) => {
      return value.author.gender
    })
  }

  const filterType = [
    {
      type: 'genre',
      func: getUniques(filterByGenre())
    },
    {
      type: 'author',
      func: getUniques(filterByAuthor())
    },
    {
      type: 'gender',
      func: getUniques(filterByAuthorGender())
    }
  ] as Array<any>

  return (
    <nav>
      <ul className="filter-type">
        {filterType.map((value: any, key: any) => {
          return (
            <li key={key} className="filter-parent">
              {value.type}
              <FilterType bookshelf={value.func} type={value.type} setSelectedFilter={setSelectedFilter}/>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default BookFilter;