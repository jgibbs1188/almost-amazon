import { deleteAuthor, getSingleAuthor } from './authorData';
import { deleteBook, getAuthorsBooks, getSingleBook } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

// const viewBookDetails = async (firebaseKey) => {
//   const book = await getSingleBook(firebaseKey);
//   const authorObject = await getSingleAuthor(book.author_id);
//   return ({ authorObject, ...book });
// })().catch(console.warn);

const viewAuthorBooks = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey)
    .then((authorObject) => {
      getAuthorsBooks(authorObject.firebaseKey)
        .then((bookObject) => {
          resolve({ book: bookObject, ...authorObject });
        });
    }).catch(reject);
});

const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
  getAuthorsBooks(authorId).then((authorsBookArray) => {
    const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));
    Promise.all([...deleteBooks]).then(() => resolve(deleteAuthor(authorId)));
  }).catch(reject);
});

export { viewBookDetails, viewAuthorBooks, deleteAuthorBooks };
