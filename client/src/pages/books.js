import React, {useEffect, useState} from "react";
import API from "../utils/API";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);
  //deconstructiong the axios call ino this function below
  const loadBooks = () => {
    const getBookList = async () => {
      const results = await API.getBooks();
      setBooks(results.data.items);
    };
    getBookList();
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    API.getBook(e.target.searchedBook.value.split(" ").join(""))
      .then(res => {
        console.log(res.data.items);
        setBooks(res.data.items);
      })
      .catch(err => console.log(err));
  };
  return <div></div>;
}
