import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BookShelf = props => {
   const { books, shelfLabel, changeShelf } = props;
   
   return (
      <div className="bookshelf">
         <h2 className="bookshelf-title">{shelfLabel}</h2>
         <div className="bookshelf-books">
            <ol className="books-grid">
               {books.map((book) => (
                  <Book 
                     key={book.id}
                     book={book}
                     booksOnShelf={books}
                     changeShelf={changeShelf}
                  />
            ))}
            </ol>
         </div>
      </div>
   );
}

BookShelf.propTypes = {
   books: PropTypes.array.isRequired,
   shelfLabel: PropTypes.string.isRequired,
   changeShelf: PropTypes.func.isRequired
}

export default BookShelf;
