import clearDom from '../helpers/data/clearDom';

const viewBook = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
    <div class="mt-5 d-flex flex-wrap">
     <div class="d-flex flex-column">
       <img src=${obj.image} alt=${obj.title} style="width: 300px;">
     </div>
     <div class="text-white ms-5 details">
      <h5>${obj.title} by ${obj.authorObject.first_name} ${obj.authorObject.last_name} ${obj.authorObject.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
      Author's Email: <a href="mailto:${obj.authorObject.email}">${obj.authorObject.email}</a>
      <p>${obj.description || ''}</p>
      <hr>
      <p>${obj.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> 
          $${obj.price}` : `$${obj.price}`}</p>  
      <div class="mt-5">
              <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
              <i id="delete-book--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
              <i id="review-book--${obj.firebaseKey}" class="btn btn-warning fas fa-sticky-note"></i>
        </div>    
     </div>
    </div>`;
};

export default viewBook;
