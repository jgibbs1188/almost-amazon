import addBookForm from '../components/forms/addBookForm';
import {
  createBook,
  createReview,
  deleteBook,
  getBookReviews,
  getSingleBook,
  updateBook,
  viewBookReviews
} from '../helpers/data/bookData';
import { showBooks } from '../components/books';
import { showAuthors } from '../components/authors';
import {
  createAuthor,
  updateAuthor,
  getSingleAuthor
} from '../helpers/data/authorData';
import addAuthorForm from '../components/forms/addAuthorForm';
import editAuthorForm from '../components/forms/editAuthorForm';
import viewBook from '../components/viewBook';
import viewAuthor from '../components/viewAuthor';
import { deleteAuthorBooks, viewAuthorBooks, viewBookDetails } from '../helpers/data/mergedData';
import { showReviews } from '../components/reviews';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');

        deleteBook(id, uid).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      addBookForm(uid);
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        author_id: document.querySelector('#select-author').value,
        uid
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleBook(id).then((bookObj) => addBookForm(uid, bookObj));
    }

    // CLICK EVENT TO FOR THE REVIEW BUTTON
    if (e.target.id.includes('review-book')) {
      const [, firebaseKey] = e.target.id.split('--');

      getBookReviews(firebaseKey).then(showReviews);
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK REVIEW
    if (e.target.id.includes('review-book')) {
      e.preventDefault();
      const reviewObject = {
        reviews: []
      };

      createReview(reviewObject).then((reviewsArray) => viewBookReviews(reviewsArray));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const bookObject = {
        author_id: document.querySelector('#author').value,
        image: document.querySelector('#image').value,
        price: Number(document.querySelector('#price').value),
        description: document.querySelector('#description').value,
        sale: document.querySelector('#sale').checked,
        title: document.querySelector('#title').value,
        firebaseKey
      };

      updateBook(uid, bookObject).then(showBooks);
    }

    // CLICK EVENT TO VIEW A BOOK
    if (e.target.id.includes('view-book-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      viewBookDetails(firebaseKey).then(viewBook);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, id] = e.target.id.split('--');
        deleteAuthorBooks(id, uid).then(showAuthors);
      }
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      addAuthorForm(uid);
    }

    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const authorObject = {
        email: document.querySelector('#email').value,
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey,
        uid
      };

      createAuthor(authorObject).then(showAuthors);
    }

    // ADD CLICK EVENT FOR EDITING/UPDATING AN AUTHOR
    if (e.target.id.includes('edit-author-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleAuthor(id).then((authorObj) => editAuthorForm(uid, authorObj));
    }

    // CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('update-author')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const authorObject = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        email: document.querySelector('#email').value,
        favorite: document.querySelector('#favorite').checked,
        firebaseKey
      };

      updateAuthor(authorObject, uid).then(showAuthors);
    }

    // CLICK EVENT TO VIEW AN AUTHOR
    if (e.target.id.includes('view-author-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      viewAuthorBooks(firebaseKey).then(viewAuthor);
    }
  });
};

export default domEvents;
