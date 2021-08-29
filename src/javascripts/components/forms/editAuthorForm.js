const editAuthorForm = (obj) => {
  document.querySelector('#modal-body').innerHTML = `
      <form id="edit-author-form" class="mb-4">
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="text" class="form-control" id="first_name" aria-describedby="firstName" placeholder="Enter Book Title" value="${obj.first_name}" required>
        </div>
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="text" class="form-control" id="last_name" aria-describedby="lastName" placeholder="lastName" required value="${obj.last_name}">
        </div>
        <div class="form-group">
          <label for="email">Price</label>
          <input type="email" class="form-control" id="email" placeholder="Email Address" value="${obj.email}" required>
        </div>
        <button type="submit" id="update-author--${obj.firebaseKey}" class="btn btn-success">Update Author</button>
      </form>`;
};

export default editAuthorForm;
