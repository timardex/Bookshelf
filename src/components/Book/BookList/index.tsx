import React, { useEffect, useCallback, useState } from 'react';
import { Female } from 'assets/icons/Female';
import { Male } from 'assets/icons/Male';
import { Heart } from 'assets/icons/Heart';

import './style.scss';

interface Props {
    bookshelf: Array<any>;
    getBooksLength: Function;
    booksLength: number;
    selectedFilter: string;
    search: string;
}

const convertDate = (time: string): string => {
    const date = new Date(time).getUTCFullYear();
    const thisYear = new Date().getUTCFullYear();
    return date === thisYear ? 'this year' : 'last year';
};

const BookList: React.FC<Props> = (props: Props) => {
    const { bookshelf, getBooksLength, booksLength, selectedFilter, search } = props;
    const [books, setBooks] = useState<any>(bookshelf);

    useEffect(() => {
        setBooks(bookshelf);
    }, [bookshelf]);

    console.log(books);

    const addToFavourites = (item: any): any => {
        setBooks(books.map((value: any) => (value.name === item.name ? { ...value, favourite: true } : value)));
    };

    const removeFromFavourites = (item: any): any => {
        setBooks(books.map((value: any) => (value.name === item.name ? { ...value, favourite: false } : value)));
    };

    const filteredList = useCallback((): any => {
        switch (selectedFilter) {
            case '':
                return books;
            case 'Book name ASC':
                return books.sort((a: any, b: any) => {
                    return a.name > b.name ? -1 : 1;
                });
            case 'Book name DESC':
                return books.sort((a: any, b: any) => {
                    return a.name < b.name ? -1 : 1;
                });
            case 'Author name ASC':
                return books.sort((a: any, b: any) => {
                    return a.author.name > b.author.name ? -1 : 1;
                });
            case 'Author name DESC':
                return books.sort((a: any, b: any) => {
                    return a.author.name < b.author.name ? -1 : 1;
                });
            case 'My Favourites':
                return books.filter((value: any) => {
                    return value.favourite === true;
                });
            default:
                return books.filter((value: any) => {
                    return (
                        value.genre === selectedFilter ||
                        value.author.name === selectedFilter ||
                        value.author.gender === selectedFilter ||
                        value.date.includes(selectedFilter)
                    );
                });
        }
    }, [selectedFilter, books]);

    const searchFilter = useCallback((): any => {
        return filteredList().filter((value: any) => {
            return (
                value.name.toLowerCase().includes(search.toLowerCase()) ||
                value.author.name.toLowerCase().includes(search.toLowerCase()) ||
                value.genre.toLowerCase().includes(search.toLowerCase())
            );
        });
    }, [filteredList, search]);

    useEffect(() => {
        getBooksLength(searchFilter().length);
    }, [getBooksLength, searchFilter]);

    return (
        <div className="book-list">
            <div className="box">
                {searchFilter().map((value: any, key: any) => {
                    return (
                        <div className="book" key={key}>
                            <div
                                className={`add-to-favourites custom ${value.favourite ? 'added' : ''}`}
                                title={`${value.favourite ? 'Remove from' : 'Add to'} favourites`}
                                onClick={() => (value.favourite ? removeFromFavourites(value) : addToFavourites(value))}
                            >
                                <Heart />
                            </div>
                            <img src={`${value.image}.jpg`} alt={value.name} />
                            <div className="info">
                                <h3 className="title custom">{value.name}</h3>
                                <p className="genre custom">{value.genre}</p>
                                <p className="date custom">
                                    Published <span>{convertDate(value.date)}</span>
                                </p>
                                <p className="author custom">
                                    <span>{value.author.gender === 'female' ? <Female /> : <Male />}</span>
                                    {value.author.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {booksLength === 0 && <p className="no-result">No match found! Please try again.</p>}
        </div>
    );
};

export default BookList;
