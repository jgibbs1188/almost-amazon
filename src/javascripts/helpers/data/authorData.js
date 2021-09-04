import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR AUTHORS

const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthors = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then(resolve);
    })
    .catch((error) => reject(error));
});

// GET SINGLE AUTHOR
const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((errors) => reject(errors));
});

// CREATE AUTHOR
const createAuthor = (newAuthorData) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, newAuthorData)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios.patch(`${dbUrl}/authors/${firebaseKey}.json`, { firebaseKey })
        .then(() => getAuthors().then((allAuthors) => resolve(allAuthors)));
    })
    .catch((errors) => reject(errors));
});

// UPDATE AUTHOR
const updateAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthors().then(resolve))
    .catch(reject);
});

// SEARCH AUTHORS

// FAVORITE AUTHORS
const favoriteAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
  // This works too .catch(reject);
});

export {
  getAuthors,
  createAuthor,
  favoriteAuthors,
  deleteAuthor,
  getSingleAuthor,
  updateAuthor
};
