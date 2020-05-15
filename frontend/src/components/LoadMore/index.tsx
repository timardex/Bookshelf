import React, {useState} from  'react';
import {Loading} from 'assets/icons/Loading';

import './style.scss';

interface Props {
  numberOfBooks: number,
  setNumberOfBooks: Function
}

const LoadMore: React.FC<Props> = (props: Props) => {
  const {numberOfBooks, setNumberOfBooks} = props;

  const [loadingBook, setLoadingBook] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>('Load more');

  const loadMoreBook = (items: number):void => {
    setLoadingBook(true);
    setLoadingText('Loading...');

    setTimeout(() => {
      setNumberOfBooks(numberOfBooks + items);
      setLoadingBook(false);
      setLoadingText('Load more');
    }, 1000)
  }

  return (
    <div className="load-more">
      <button className="btn" onClick={() => loadMoreBook(numberOfBooks)}>{loadingText} {loadingBook && <Loading />}</button>
    </div>
  )
}

export default LoadMore