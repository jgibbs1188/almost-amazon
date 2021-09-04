import clearDom from '../../helpers/data/clearDom';

const editAuthorForm = (uid, authorObj) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
      <form id="edit-author-form" class="mb-4">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name" aria-describedby="firstName" placeholder="Enter Book Title" value="${authorObj.first_name}" required>
        </div>
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name" aria-describedby="lastName" placeholder="lastName" required value="${authorObj.last_name}">
        </div>
        <div class="form-group">
          <label for="email">Price</label>
          <input type="email" class="form-control" id="email" placeholder="Email Address" value="${authorObj.email}" required>
        </div>
        <div class="form-check mb-2">
          <input type="checkbox" class="form-check-input" id="favorite" ${authorObj.favorite && 'checked'}>
          <label class="form-check-label" for="sale">Favorite?</label>
        </div>
        <button type="submit" id="update-author--${authorObj.firebaseKey}" class="btn btn-success">Update Author</button>
      </form>`;
};

export default editAuthorForm;
