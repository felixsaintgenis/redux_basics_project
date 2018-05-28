import React, { Component } from 'react';
import BookList from '../containers/Booklist'
import BookDetails from '../containers/BookDetails'

export default class App extends Component {
  render() {
    return (
      <div>
      <BookList />
      <BookDetails />
      </div>
    );
  }
}
