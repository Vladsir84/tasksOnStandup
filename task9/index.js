const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

function getUsersList() {
  return fetch(baseUrl)
    .then(response => response.json());
}

getUsersList()
  .then(data => {
    console.log(data);
  })

function getUserById(userId) {
  return fetch(`${baseUrl}/${userId}`)
    .then(response => response.json()
    )
}

getUserById('1')
  .then(data => {
    console.log(data);
  });


function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(userData)
  })
}

const user = {
  age: 7,
  email: "Abbie43@gmail.com",
  firstName: "Bill",
  id: "100",
}

createUser(user)
  .then(data => console.log(data))


function updateUser(userId, updatedUserData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(updatedUserData)
  })
}

updateUser('1', { email: 'a@a.com' })
  .then(result => result.json())  
  .then(result => { console.log(result) });


function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  })
};

deleteUser('15')
.then(response => response.json())
.then(data =>console.log(data));


// /* createUser code here */

// const createUser = userData => {
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(userData)
//   })
// };

// const user = {
//   age: 7,
//   email: "BillHy@gmail.com",
//   firstName: "Bill",
//   lastName: "Haley",
//   id: "1",
// }

// createUser(user)
//   .then(data => console.log(data))

// /* updateUser code here */

// const updateUser = (userId, updatedUserData) => {
//   return fetch(`${baseUrl}/${userId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(updatedUserData)
//   })
// };

// /* deleteUser code here */

// const deleteUser = (userId) => {
//   return fetch(`${baseUrl}/${userId}`, {
//     method: 'DELETE',
//   })
// };