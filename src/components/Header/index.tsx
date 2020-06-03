import React, { createRef, useState, useEffect, useCallback } from 'react';
import BookFilter from '../Book/BookFilter';
import BookSorter from '../Book/BookSorter';
import BookSearch from '../Book/BookSearch';
import ClearFilter from '../ClearFilter';

import './style.scss';

interface Props {
    booksLength: number;
    selectedFilter: string;
    setSelectedFilter: Function;
    search: string;
    setSearch: Function;
    bookshelf: Array<any>;
}

const Header: React.FC<Props> = (props: Props) => {
    const { booksLength, selectedFilter, setSelectedFilter, search, setSearch, bookshelf } = props;
    const [toggle, setToggle] = useState<boolean>(false);

    const headerRef = createRef<HTMLDivElement>();

    const scrollToTop = (ref: any): void => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const handleScroll = useCallback((): void => {
        setToggle(window.scrollY >= 250);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <header ref={headerRef}>
            <div className="top-bar">
                <div className="col-left">
                    <h1>
                        Bookshelf <small>loaded books: {booksLength}</small>
                    </h1>
                </div>

                <div className="col-right">
                    {toggle && <div className="scroll-to-top" onClick={() => scrollToTop(headerRef)}></div>}
                    {(selectedFilter !== '' || search !== '') && (
                        <ClearFilter
                            btnText={'Clear filter'}
                            setSelectedFilter={setSelectedFilter}
                            setSearch={setSearch}
                        />
                    )}
                </div>
            </div>
            <BookFilter bookshelf={bookshelf} setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
            <BookSorter setSelectedFilter={setSelectedFilter} selectedFilter={selectedFilter} />
            <BookSearch setSearch={setSearch} search={search} />
        </header>
    );
};

export default Header;
