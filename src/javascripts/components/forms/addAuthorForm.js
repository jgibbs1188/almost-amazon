// import selectAuthor from './selectAuthor';
import { createAuthorSubmitEvent } from '../../events/formEvents';

const addAuthorForm = (obj) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">Author First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Enter Author first name" value="${obj.first_name || ''}"required>
      </div>
      <div class="form-group">
        <label for="lastName">Author Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter Author last name" value="${obj.last_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" step="0.01" class="form-control" id="email" placeholder="Email Address" value="${obj.email || ''}" required>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;

  //   selectAuthor();

  document.querySelector('#submit-author-form').addEventListener('submit', createAuthorSubmitEvent);
};

export default addAuthorForm;
