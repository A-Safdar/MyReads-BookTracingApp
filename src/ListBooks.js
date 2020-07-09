import React from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class ListBooks extends React.Component {
   render() {
      const books = this.props.booksOnShelf;
      const changeShelf = this.props.changeShelf;
      // Hard coded the available shelf types for the drop down list
      const shelfTypes = [
         { res: "currentlyReading", label: "Currently Reading" },
         { res: "wantToRead", label: "Want To Read" },
         { res: "read", label: "Read" },
      ]

      return (
         shelfTypes.map((shelf, index) => {
            const filteredBooks = books.filter(book => book.shelf === shelf.res)
            return (
               <div key={index}>
                  <BookShelf 
                     books={filteredBooks} 
                     shelfLabel={shelf.label}
                     changeShelf={changeShelf}
                  />
               </div>
            )
         })
      );
   }
}

ListBooks.propTypes = {
   booksOnShelf: PropTypes.array.isRequired,
   changeShelf: PropTypes.func.isRequired
};

export default ListBooks;
