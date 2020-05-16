import React from 'react';
import BookFilter from '../Book/BookFilter';
import BookSorter from '../Book/BookSorter';
import BookSearch from '../Book/BookSearch';
import ClearFilter from '../ClearFilter';

import './style.scss';

interface Props {
  booksLength: number,
  selectedFilter: string,
  setSelectedFilter: Function,
  search: string,
  setSearch: Function,
  bookshelf: Array<any>
}

const Header: React.FC<Props> = (props: Props) => {
  const {booksLength, selectedFilter, setSelectedFilter, search, setSearch, bookshelf} = props;
  return (
    <header>
      <div className="top-bar">
        <h1>Bookshelf <small>available books: {booksLength}</small></h1>
        {
          (selectedFilter !== '' || search !== '') && 
          <ClearFilter
            btnText={'Clear filter'}
            setSelectedFilter={setSelectedFilter}
            setSearch={setSearch} />
        }

      </div>
      <BookFilter bookshelf={bookshelf} setSelectedFilter={setSelectedFilter} />
      <BookSorter setSelectedFilter={setSelectedFilter} />
      <BookSearch setSearch={setSearch} search={search} />
    </header>
  )
}

export default Header;