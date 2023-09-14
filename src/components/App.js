
import React from "react";
import './../styles/App.css';
import BooksList from "./BooksList";

const App = () => {
  return (
    <div>
      <h1>SORT BOOKS</h1>
      <BooksList />
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
