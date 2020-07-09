import React from "react";
import * as BooksAPI from './BooksAPI'
import "./App.css";
import ListBooks from "./ListBooks";
import Search from "./Search";
import { Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
   state = {
      books: []
   };
   // Ensure the react component is updated when anything is changed
   componentDidMount() {
      BooksAPI.getAll().then(books => {
         this.setState(() => ({
            books
         }))
      })
   }

   // Function used as a prop
   onShelfChange = (updatedBook, newShelf) => {
      BooksAPI.update(updatedBook, newShelf).then(res => {
         BooksAPI.getAll().then(books => {
            this.setState(() => ({
               books: books
            }))
         })
      })
   }

   render() {
      return (
         <div className="app">
            <Route path="/search" render={() => (
               <Search 
                  changeShelf={this.onShelfChange}
                  booksOnShelf={this.state.books}
               />
            )} />

            <Route exact path='/' render={() => (
               <div className="list-books">
                  <div className="list-books-title">
                     <h1>MyReads</h1>
                  </div>
                  <div className="list-books-content">
                     <ListBooks booksOnShelf={this.state.books} changeShelf={this.onShelfChange}/>
                  </div>
                  <div className="open-search">
                     <Link to="/search">
                        <button>Add a book</button>
                     </Link>
                  </div>
               </div>
            )} />
         </div>
      );
   }
}

export default BooksApp;