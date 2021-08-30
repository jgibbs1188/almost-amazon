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
    first_name: document.querySelector('#first_name').value,
    last_name: document.querySelector('#last_name').value,
    email: document.querySelector('#email').value,
    favorite: document.querySelector('#favorite').checked,
  };
  createAuthor(formData).then((allAuthors) => showAuthors(allAuthors));
};

export { createBookSubmitEvent, createAuthorSubmitEvent };
