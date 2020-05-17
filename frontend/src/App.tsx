import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import BookList from './components/Book/BookList';
import LoadingScreen from './components/LoadingScreen';
import LoadMore from './components/LoadMore';


import './App.scss'

const App: React.FC<{}> = () => {
    const initialBookQuantity: number = 8;
    
    const [bookshelf, getBookshelf] = useState<Array<any>>([]);
    const [numberOfBooks, setNumberOfBooks] = useState<number>(initialBookQuantity);
    const [booksLength, getBooksLength] = useState<number>(numberOfBooks);

    const [loading, setLoading] = useState<boolean>(true);
    
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
          setLoading(true);

          try {
            const result = await axios.get('http://localhost:3001/data');
            getBookshelf(result.data);
          } catch(error) {
            return error
          }

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
            
            <Header
              booksLength={booksLength}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              search={search}
              setSearch={setSearch}
              bookshelf={bookshelf.slice(0, numberOfBooks)}
            />

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
                  loadMoreQuantity={initialBookQuantity}
                  setNumberOfBooks={setNumberOfBooks} />
              }
            </footer>
          </div>
        }
      </div>
    );
};

export default App;
