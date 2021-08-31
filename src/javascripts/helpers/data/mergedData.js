import { getSingleAuthor } from './authorData';
import { getAuthorsBooks, getSingleBook } from './bookData';

const viewBookDetails = (bookFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(bookFirebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ authorObject, ...bookObject });
        });
    }).catch(reject);
});

// const viewBookDetails = (firebaseKey) => (async () => {
//   const book = await getSingleBook(firebaseKey);
//   const author = await getSingleAuthor(book.author_id);
//   return ({ author, ...book });
// })().catch(console.warn);

const viewAuthorBooks = (bookObject) => new Promise((resolve, reject) => {
  getAuthorsBooks()
    .then(() => {
      getAuthorsBooks(bookObject.firebaseKey)
        .then(() => {
          resolve([]);
        });
    }).catch(reject);
});

// const updateBook = (bookObj) => new Promise((resolve, reject) => {
//     axios.patch(`${dbUrl}/books/${bookObj.firebaseKey}.json`, bookObj)
//       .then(() => getBooks().then(resolve))
//       .catch(reject);
//   });

// const viewAuthorBooks = () => {
//     let domString = `<p class="text-white ms-5 details" id="authoredBooks">${showAuthorsBooks()}</p>`;
//     document.querySelector('#authoredBooks').innerHTML = domString;
//   };

export { viewBookDetails, viewAuthorBooks };
