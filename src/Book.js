import React from "react";
import PropTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

class Book extends React.Component {
   render() {
      const book = this.props.book;
      
      // Check if cover image is available
      const coverImgFound = book.imageLinks
            ? true
            : false;
      
      return (
         <li>
            <div className="book">
               <div className="book-top">
                  {/* The following div changes it's class name and style depending on
                  whether or not a cover image is available */}
                  <div
                     className={coverImgFound ? "book-cover" : "book-cover-notfound"}
                     style={coverImgFound ? {
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                     } : {
                        width: 128,
                        height: 193,
                     }}
                  />
                  <ShelfChanger
                     changeShelf={this.props.changeShelf}
                     booksOnShelf={this.props.booksOnShelf}
                     book={book}
                  />
               </div>
               <div className="book-title">{book.title}</div>
               <div className="book-authors">{book.authors}</div>
            </div>
         </li>
      );
   }
}

Book.propTypes = {
   book: PropTypes.object.isRequired,
   booksOnShelf: PropTypes.array.isRequired,
   changeShelf: PropTypes.func.isRequired,
};

export default Book;
