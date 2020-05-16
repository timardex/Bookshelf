import React from  'react';

import './style.scss';

interface Props {
  numberOfBooks: number,
  setNumberOfBooks: Function
}

const LoadMore: React.FC<Props> = (props: Props) => {
  const {numberOfBooks, setNumberOfBooks} = props;

  return (
    <div className="load-more">
      <button className="btn" onClick={() => setNumberOfBooks(numberOfBooks + numberOfBooks)}>Load more</button>
    </div>
  )
}

export default LoadMore;