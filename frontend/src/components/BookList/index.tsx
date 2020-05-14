import React from 'react';
import {Female} from 'assets/icons/Female';
import {Male} from 'assets/icons/Male';

import './style.scss'

interface Props {
  bookshelf: Array<any>,
  selectedFilter: string,
  search: string
}

const BookList: React.FC<Props> = (props: Props) => {
  const {bookshelf, selectedFilter, search} = props;

  /* const convertDate = (time: string):any => {
    const date = new Date(time);
    return date.toUTCString()
  } */
  
  const filteredList = ():any => {
    switch(selectedFilter) {
      case 'all':
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
          return value.genre === selectedFilter || value.author.name === selectedFilter || value.author.gender === selectedFilter
        });
    }
  }

  const searchFilter = ():any => {
    return filteredList().filter((value: any) => {
      return value.name.toLowerCase().includes(search.toLowerCase()) || value.author.name.toLowerCase().includes(search.toLowerCase()) || value.genre.toLowerCase().includes(search.toLowerCase())
    })
  }

  return (
    <div id="book-list">
      <div className="box">
        {searchFilter().map((value: any, key: any) => {
            return (
            <div className="book" key={key}>
              <img src={`${value.image}.jpg`} alt={value.name} />
              <div className="info">
                <h3 className="title">{value.name}</h3>
                <p className="genre">{value.genre}</p>
                {/* <p className="date">Date: {convertDate(value.date)}</p> */}
                <p className="author" title={`Author gender ${value.author.gender}`}>
                  <span>{value.author.gender === 'female' ? <Female /> : <Male />}</span>
                  {value.author.name}
                </p>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  )
}

export default BookList;