import selectAuthor from './selectAuthor';
import createBookSubmitEvent from '../../events/formEvents';

const addAuthorForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="title">Author First Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="authorfirstname" placeholder="Enter Author first name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" step="0.01" class="form-control" id="email" placeholder="Email Address" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="sale">
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" id="submit-book" class="btn btn-primary">Submit Book</button>
    </form>`;

  selectAuthor();

  document.querySelector('#submit-book-form').addEventListener('submit', createBookSubmitEvent);
};

export default addAuthorForm;
