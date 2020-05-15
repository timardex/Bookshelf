import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BookList from './components/Book/BookList';
import BookFilter from './components/Book/BookFilter';
import BookSorter from './components/Book/BookSorter';
import BookSearch from './components/Book/BookSearch';

import LoadingScreen from './components/LoadingScreen';
import LoadMore from './components/LoadMore';
import ClearFilter from './components/ClearFilter';

import './App.scss'

const App: React.FC<{}> = () => {
    const [bookshelf, getBookshelf] = useState<Array<any>>([]);
    const [numberOfBooks, setNumberOfBooks] = useState<number>(8);
    const [booksLength, getBooksLength] = useState<number>(numberOfBooks);

    const [loading, setLoading] = useState<boolean>();
    
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
          setLoading(true);

          const result = await axios('http://localhost:3001/data');
          getBookshelf(result.data);

          setLoading(false);
      };
      fetchData();
    }, []);

    return (
      <div className="App">
        {loading && 
          <LoadingScreen loadingText={`Content is loading, please wait ...`}/>
        }

        {!loading && 
          <div className="container">
            <header>
              <BookFilter bookshelf={bookshelf.slice(0, numberOfBooks)} setSelectedFilter={setSelectedFilter} />
              <BookSorter setSelectedFilter={setSelectedFilter} />
              <BookSearch setSearch={setSearch} search={search} />
            </header>

            <main>
              <BookList
                bookshelf={bookshelf.slice(0, numberOfBooks)}
                getBooksLength={getBooksLength}
                booksLength={booksLength}
                selectedFilter={selectedFilter}
                search={search}/>
            </main>

            <footer>
              {
                booksLength === numberOfBooks &&
                <LoadMore
                  numberOfBooks={numberOfBooks}
                  setNumberOfBooks={setNumberOfBooks} />}

              {
                (selectedFilter !== '' || search !== '') && 
                <ClearFilter
                  btnText={'Clear filter'}
                  setSelectedFilter={setSelectedFilter}
                  setSearch={setSearch} />
              }
            </footer>
          </div>
        }
      </div>
    );
};

export default App;
