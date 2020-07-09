import React from "react";
import PropTypes from "prop-types";

const ShelfChanger = (props) => {
   const { changeShelf , booksOnShelf , book } = props;

   const handleShelfChange = (event) => {
      changeShelf(book, event.target.value);
   };

   const isBookOnShelf = booksOnShelf.find(bookOnShelf => bookOnShelf.id === book.id);
   const selectedBookShelf = isBookOnShelf ? isBookOnShelf.shelf : "none";

   return (
      <div className="book-shelf-changer">
         <select value={selectedBookShelf} onChange={handleShelfChange}>
            <option value="move" disabled>
               Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
         </select>
      </div>
   );
};

ShelfChanger.propTypes = {
   changeShelf: PropTypes.func.isRequired,
   booksOnShelf: PropTypes.array.isRequired,
   book: PropTypes.object.isRequired
};

export default ShelfChanger;
