import axios from "axios";

export default {
  getBooks: function () {
    //gets all books
    return axios.get("/api/books");
  }, // gets the bbok with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  }, // deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  }, // safves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
};
