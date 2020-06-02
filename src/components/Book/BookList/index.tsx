import React, { useEffect, useCallback } from 'react';
import {Female} from 'assets/icons/Female';
import {Male} from 'assets/icons/Male';

import './style.scss'

interface Props {
  bookshelf: Array<any>,
  getBooksLength: Function,
  booksLength: number,
  selectedFilter: string,
  search: string
}

const convertDate = (time: string):string => {
  const date = new Date(time).getUTCFullYear();
  const thisYear = new Date().getUTCFullYear();
  return date === thisYear ? 'this year' : 'last year'
}

const BookList: React.FC<Props> = (props: Props) => {
  const {bookshelf, getBooksLength, booksLength, selectedFilter, search} = props;
  
  const filteredList = useCallback(():any => {
    switch(selectedFilter) {
      case '':
        return bookshelf;
      case 'Book name ASC':
        return bookshelf.sort((a: any, b: any) => {
          return a.name > b.name ? -1 : 1
        });
      case 'Book name DESC':
        return bookshelf.sort((a: any, b: any) => {
          return a.name < b.name ? -1 : 1
        });
      case 'Author name ASC':
        return bookshelf.sort((a: any, b: any) => {
          return a.author.name > b.author.name ? -1 : 1
        });
      case 'Author name DESC':
        return bookshelf.sort((a: any, b: any) => {
          return a.author.name < b.author.name ? -1 : 1
        });
      default:
        return bookshelf.filter((value: any) => {
          return value.genre === selectedFilter ||
          value.author.name === selectedFilter ||
          value.author.gender === selectedFilter ||
          value.date.includes(selectedFilter)
        });
    }
  }, [selectedFilter, bookshelf])

  const searchFilter = useCallback(():any => {
    return filteredList().filter((value: any) => {
      return value.name.toLowerCase().includes(search.toLowerCase()) ||
      value.author.name.toLowerCase().includes(search.toLowerCase()) || 
      value.genre.toLowerCase().includes(search.toLowerCase())
    })
  }, [filteredList, search])

  useEffect(() => {
    getBooksLength(searchFilter().length)
  }, [getBooksLength, searchFilter])

  return (
    <div className="book-list">
      <div className="box">
        {searchFilter().map((value: any, key: any) => {
            return (
            <div className="book" key={key}>
              <img src={`${value.image}.jpg`} alt={value.name} />
              <div className="info">
                <h3 className="title custom">{value.name}</h3>
                <p className="genre custom">{value.genre}</p>
                <p className="date custom">Published <span>{convertDate(value.date)}</span></p>
                <p className="author custom">
                  <span>{value.author.gender === 'female' ? <Female /> : <Male />}</span>
                  {value.author.name}
                </p>
              </div>
            </div>
            )
        })}
      </div>

      {booksLength === 0 && <p className="no-result">No match found! Please try again.</p>}
    </div>
  )
}

export default BookList;