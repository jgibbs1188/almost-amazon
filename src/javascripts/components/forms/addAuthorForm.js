import { createAuthorSubmitEvent } from '../../events/formEvents';
import clearDom from '../../helpers/data/clearDom';

const addAuthorForm = (obj = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
      <div class="form-group">
        <label for="firstName">Author First Name</label>
        <input type="text" class="form-control" id="firstName" placeholder="Enter Author first name" value="${obj.first_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="lastName">Author Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Enter Author last name" value="${obj.first_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" step="0.01" class="form-control" id="email" placeholder="Email Address" value="${obj.email || ''}" required>
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="favorite" ${obj.favorite ? 'checked' : ''}>
        <label class="form-check-label" for="sale">Favorite?</label>
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;

  document.querySelector('#submit-author-form').addEventListener('submit', createAuthorSubmitEvent);
};

export default addAuthorForm;
