import React, { useState, useEffect } from 'react';
import data from './components/data.json';

import Header from './components/Header';
import BookList from './components/Book/BookList';
import LoadMore from './components/LoadMore';

import './App.scss';

const App: React.FC<{}> = () => {
    const initialBookQuantity: number = 8;

    const [numberOfBooks, setNumberOfBooks] = useState<number>(initialBookQuantity);
    const [booksLength, getBooksLength] = useState<number>(0);
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [bookshelf, getBookshelf] = useState<Array<any>>([]);

    useEffect(() => {
        getBookshelf(data.slice(0, numberOfBooks));
    }, [numberOfBooks]);

    return (
        <div className="App">
            <div className="container">
                <Header
                    booksLength={booksLength}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    search={search}
                    setSearch={setSearch}
                    bookshelf={bookshelf}
                />

                <main>
                    <BookList
                        bookshelf={bookshelf}
                        getBooksLength={getBooksLength}
                        booksLength={booksLength}
                        selectedFilter={selectedFilter}
                        search={search}
                    />
                </main>

                <footer>
                    {booksLength === numberOfBooks && (
                        <LoadMore
                            numberOfBooks={numberOfBooks}
                            loadMoreQuantity={initialBookQuantity}
                            setNumberOfBooks={setNumberOfBooks}
                        />
                    )}
                </footer>
            </div>
        </div>
    );
};

export default App;
