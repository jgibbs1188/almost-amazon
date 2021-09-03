import clearDom from '../helpers/data/clearDom';

const showReviews = (array) => {
  clearDom();

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-review-btn">Add A Review</button>';

  array.forEach((item) => {
    document.querySelector('#view').innerHTML += `
      <div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
          <div class="card-body" style="height: 180px;">
            <h5 class="card-title">${item.title}</h5>
              <hr>
            <i id="edit-review-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-review--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
          </div>
      </div>
      `;
  });
};

const emptyReviews = () => {
  document.querySelector('#store').innerHTML = '<h1>No Reviews</h1>';
};

export { showReviews, emptyReviews };
