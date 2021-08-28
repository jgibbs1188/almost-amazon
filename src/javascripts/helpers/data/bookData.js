import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}books/${firebaseKey}.json`)
    .then(() => {
      getBooks().then(resolve);
    })
    .catch((error) => reject(error));
});

// CREATE BOOK
const createBook = (newBookData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books.json`, newBookData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/books/${firebaseKey}.json`, { firebaseKey })
        .then(() => getBooks().then((allBooks) => resolve(allBooks)));
    })
    .catch((errors) => reject(errors));
});
// UPDATE BOOK
// SEARCH BOOKS

// FILTER BOOKS ON SALE
const booksOnSale = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="sale"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
  // This works too .catch(reject);
});

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook
};
