import React from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";

class Search extends React.Component {
   state = {
      query: "",
      results: [],
      error: false,
   };

   handleSearchInput = event => {
      const query = event.target.value;
      this.setState({ query });

      if (query) {
         BooksAPI.search(query.trim(), 20).then((results) => {
            results.length > 0
            ? this.setState({results: results, error: false})
            : this.setState({results: [], error: true})
         });
      } else {
         this.setState({results: [], error: false});
      }
   };

   render() {
      const {query, results, error} = this.state;
      const booksOnShelf = this.props.booksOnShelf;

      return (
         <div className="search-books">
            <div className="search-books-bar">
               <Link className="close-search" to="/">
                  Close
               </Link>

               <div className="search-books-input-wrapper">
                  <input
                     type="text"
                     placeholder="Search by title or author"
                     value={query}
                     onChange={this.handleSearchInput}
                  />
               </div>
            </div>

            <div className="search-books-result">
               {results.length > 0 && (
                  <div className='search-books-results'>
                     <h3>Search returns {results.length} books</h3>
                     <ol className="books-grid">
                        {results.map(book => (
                           <Book 
                              key={book.id}
                              book={book}
                              booksOnShelf={booksOnShelf}
                              changeShelf={this.props.changeShelf}
                           />
                        ))}
                     </ol>
                  </div>
               )}

               {error && (
                  <div className='search-books-results'>
                     <h3>No books found. Please try again!</h3>
                  </div>
               )}
            
            </div>
         </div>
      );
   }
}

Search.propTypes = {
   changeShelf: PropTypes.func.isRequired,
   booksOnShelf: PropTypes.array.isRequired
};

export default Search;
