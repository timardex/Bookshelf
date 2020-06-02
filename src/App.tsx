import React, { useState } from 'react';
import data from './components/data.json';

import Header from './components/Header';
import BookList from './components/Book/BookList';
import LoadMore from './components/LoadMore';

import './App.scss';

const App: React.FC<{}> = () => {
    const initialBookQuantity: number = 8;
    const bookshelf = data;

    const [numberOfBooks, setNumberOfBooks] = useState<number>(initialBookQuantity);
    const [booksLength, getBooksLength] = useState<number>(numberOfBooks);
    const [selectedFilter, setSelectedFilter] = useState<string>('');
    const [search, setSearch] = useState<string>('');

    return (
        <div className="App">
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
