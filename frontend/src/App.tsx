import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {Loading} from 'assets/icons/Loading';
import BookList from './components/BookList';
import BookFilter from './components/BookFilter';
import BookSorter from './components/BookSorter';

import './App.scss'

const App: React.FC<{}> = () => {
    const [bookshelf, getBookshelf] = useState<Array<any>>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [numberOfBooks, setNumberOfBooks] = useState<number>(8);
    const [loadingBook, setLoadingBook] = useState<boolean>(false);
    const [loadingText, setLoadingText] = useState<string>('Load more');
    const [selectedFilter, setSelectedFilter] = useState<string>('all')
    const booksLoaded = bookshelf.length > 0;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
            'http://localhost:3001/data',
            );
        
            getBookshelf(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
      booksLoaded ? setLoading(false) : setLoading(true)
    }, [booksLoaded])

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
      <div className="App">
        {loading && 
          <div className="loading">
            <div>
              <p>Content is loading, please wait ...</p>
              <Loading />
            </div>
          </div>
        }

        {!loading && 
          <div className="container">
            <header>
              <BookFilter bookshelf={bookshelf.slice(0, numberOfBooks)} setSelectedFilter={setSelectedFilter}/>
              <BookSorter setSelectedFilter={setSelectedFilter}/>
            </header>

            <main>
              <BookList bookshelf={bookshelf.slice(0, numberOfBooks)} selectedFilter={selectedFilter} />
            </main>

            <footer>
              <div className="load-more-book">
                <div className="btn" onClick={() => loadMoreBook(numberOfBooks)}>{loadingText} {loadingBook && <Loading />}</div>
              </div>
            </footer>

            {selectedFilter !== 'all' && <div className="btn clear-filter" onClick={() => setSelectedFilter('all')}>Clear Filter</div>}
          </div>
        }
      </div>
    );
};

export default App;
