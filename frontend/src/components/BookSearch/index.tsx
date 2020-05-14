import React from 'react';

import './style.scss';

interface Props {
  setSearch: Function,
  search: string
}

const BookSearch: React.FC<Props> = (props: Props) => {
  const {setSearch, search} = props;
  return (
    <div className="book-search">
      <input type="text" placeholder="Search by author, book, genre or year" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default BookSearch;