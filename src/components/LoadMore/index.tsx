import React from  'react';

import './style.scss';

interface Props {
  numberOfBooks: number,
  loadMoreQuantity: number,
  setNumberOfBooks: Function
}

const LoadMore: React.FC<Props> = (props: Props) => {
  const {numberOfBooks, loadMoreQuantity, setNumberOfBooks} = props;

  return (
    <div className="load-more">
      <button className="btn" onClick={() => setNumberOfBooks(numberOfBooks + loadMoreQuantity)}>Load more</button>
    </div>
  )
}

export default LoadMore;