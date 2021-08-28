import { showBooks } from '../components/books';
import { createBook } from '../helpers/data/bookData';
import { createAuthor } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';

const createBookSubmitEvent = () => {
  const formData = {
    author_id: document.querySelector('#author').value,
    image: document.querySelector('#image').value,
    price: Number(document.querySelector('#price').value),
    sale: document.querySelector('#sale').checked,
    title: document.querySelector('#title').value,
  };
  createBook(formData).then((allBooks) => showBooks(allBooks));
};

const createAuthorSubmitEvent = () => {
  const formData = {
    email: document.querySelector('#email').value,
    first_name: document.querySelector('#first_name').checked,
    last_name: document.querySelector('#last_name').value,
  };
  createAuthor(formData).then((allAuthors) => showAuthors(allAuthors));
};

export { createBookSubmitEvent, createAuthorSubmitEvent };
