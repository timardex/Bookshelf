import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {Loading} from 'assets/icons/Loading';
import BookList from './components/BookList';
import BookFilter from './components/BookFilter';
import BookSorter from './components/BookSorter';
import BookSearch from './components/BookSearch';

import './App.scss'

const App: React.FC<{}> = () => {
    const [bookshelf, getBookshelf] = useState<Array<any>>([]);
    const [numberOfBooks, setNumberOfBooks] = useState<number>(8);

    const [loading, setLoading] = useState<boolean>(true);
    const [loadingBook, setLoadingBook] = useState<boolean>(false);
    const [loadingText, setLoadingText] = useState<string>('Load more');

    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [search, setSearch] = useState<string>('')

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
      setLoading(bookshelf.length === 0)
    }, [bookshelf.length])

    const loadMoreBook = (items: number):void => {
      setLoadingBook(true);
      setLoadingText('Loading...');
  
      setTimeout(() => {
        setNumberOfBooks(numberOfBooks + items);
        setLoadingBook(false);
        setLoadingText('Load more');
      }, 1000)
    }
  
    const loadingScreen = (): JSX.Element => {
      return (
        <div className="loading">
          <div>
            <p>Content is loading, please wait ...</p>
            <Loading />
          </div>
        </div>
      )
    }

    const renderFooter = (): JSX.Element => {
      return (
        <footer>
          <div className="load-more-book">
            <div className="btn" onClick={() => loadMoreBook(numberOfBooks)}>{loadingText} {loadingBook && <Loading />}</div>
          </div>
        </footer>
      )
    }

    const clearFilter = (): JSX.Element => {
      return (
        <div className="clear-filter">
          <div className="btn" onClick={() => {setSelectedFilter(''); setSearch('')}}>Clear Filters</div>
        </div>
      )
    }

    return (
      <div className="App">
        {loading && 
          loadingScreen()
        }

        {!loading && 
          <div className="container">
            <header>
              <BookFilter bookshelf={bookshelf.slice(0, numberOfBooks)} setSelectedFilter={setSelectedFilter} />
              <BookSorter setSelectedFilter={setSelectedFilter} />
              <BookSearch setSearch={setSearch} search={search} />
            </header>

            <main>
              <BookList bookshelf={bookshelf.slice(0, numberOfBooks)} selectedFilter={selectedFilter} search={search}/>
            </main>

            {renderFooter()}

            {(selectedFilter !== '' || search !== '') && clearFilter()}
          </div>
        }
      </div>
    );
};

export default App;
