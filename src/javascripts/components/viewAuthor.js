import clearDom from '../helpers/data/clearDom';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
      <div class="mt-5 d-flex flex-wrap">
       <div class="d-flex flex-column">
       </div>
       <div class="text-white ms-5 details">
            <h2 class="card-title">${obj.first_name} ${obj.last_name}</h2>
            <p class="card-text bold">${obj.email}</p>
        <div class="mt-5">
          <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
};

export default viewAuthor;
