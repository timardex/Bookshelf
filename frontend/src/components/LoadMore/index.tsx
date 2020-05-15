import React from  'react';

import './style.scss';

interface Props {
  numberOfBooks: number,
  setNumberOfBooks: Function
}

const LoadMore: React.FC<Props> = (props: Props) => {
  const {numberOfBooks, setNumberOfBooks} = props;

  const loadMoreBook = (items: number):void => {
    setNumberOfBooks(numberOfBooks + items);
  }

  return (
    <div className="load-more">
      <button className="btn" onClick={() => loadMoreBook(numberOfBooks)}>Load more</button>
    </div>
  )
}

export default LoadMore;