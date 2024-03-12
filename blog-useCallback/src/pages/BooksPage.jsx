import { useState } from "react";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";
import data from "../api/api.books.json";

const BooksPage = () => {
  const [books, setBooks] = useState(data);

  const handleOnChange = (searchText) => {
    const filteredBooks = data.filter((book) =>
      book.name.toUpperCase().includes(searchText.toUpperCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div className="content" style={{ margin: "40px" }}>
      <SearchBox onChange={handleOnChange} style={{ width: "700px" }} />
      <SearchResults data={books} style={{ width: "700px" }} />
    </div>
  );
};

export default BooksPage;
