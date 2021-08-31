import clearDom from '../helpers/data/clearDom';

const showAuthors = (array) => {
  clearDom();

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
            <p class="card-text bold">${item.email}</p>
              <hr>
            <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
            <i class="fas fa-edit btn btn-info" id="edit-author-btn--${item.firebaseKey}"></i>
            <i class="btn btn-danger fas fa-trash-alt" id="delete-author--${item.firebaseKey}"></i>
          </div>
      </div>
  `;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
