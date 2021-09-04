import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;

// GET BOOKS
const getBooks = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE BOOK
const deleteBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/books/${firebaseKey}.json`)
    .then(() => {
      getBooks().then(resolve);
    })
    .catch(reject);
});

// GET SINGLE BOOK
const getSingleBook = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((errors) => reject(errors));
});

// GET ALL BOOKS BY ONE AUTHOR
const getAuthorsBooks = (authorFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books.json?orderBy="author_id"&equalTo="${authorFirebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
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
const updateBook = (bookObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
    .then(() => getBooks().then(resolve))
    .catch(reject);
});

// SEARCH BOOKS

// FILTER BOOKS ON SALE
const booksOnSale = (userId) => new Promise((resolve, reject) => {
  getBooks(userId)
    .then((userBooksArray) => {
      const onSaleBooks = userBooksArray.filter((book) => book.sale);
      resolve(onSaleBooks);
    })
    .catch(reject);
});

// GET ALL REVIEWS FOR ONE BOOK
const getBookReviews = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/books/${firebaseKey}/reviews.json`)
    .then((response) => resolve(response))
    .catch(reject);
});

// VIEW ALL REVIEWS ON ONE BOOK
const viewBookReviews = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      getBookReviews(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

// CREATE REVIEW
const createReview = (firebaseKey) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/books/${firebaseKey}/reviews.json`)
    .then((response) => {
      const newReviewItem = response.data.name;
      axios.patch(`${dbUrl}/books/${firebaseKey}.json`, { newReviewItem })
        .then(() => getBookReviews().then(() => resolve(viewBookReviews)));
    })
    .catch((errors) => reject(errors));
});

export {
  getBooks,
  createBook,
  booksOnSale,
  deleteBook,
  getSingleBook,
  updateBook,
  getAuthorsBooks,
  viewBookReviews,
  getBookReviews,
  createReview
};
