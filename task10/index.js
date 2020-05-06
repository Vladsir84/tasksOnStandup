const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';

async function getUserData(userId) {

    try {
        const response = await fetch(`${baseUrl}/users/${userId}`)

        if (!response.ok) {
            throw new Error('Can not find a user');
        }
         return await response.json();
        
        
    } catch (error) {
        console.log(error);
    }
}

getUserData('4')
  .then (userData => console.log(userData))
  .catch(err => {alert(err.message)});   
 
  async function printUserData(userId) {
    try {
    const userData = await getUserData(userId)
        // .then(userData => {
        //     console.log(userData);
        // })
        // .catch(error => {
        // });
    } catch(err) {
        console.log(error.message);

    } 
}


// const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockap.io/api/v1';
// export function getUserData(userId) {
//     return fetch(`${baseUrl}/users/${userId}`).then(response => {
//         if (!response.ok) {
//             throw new Error('Can not find a user');
//         }
//         return response.json();
//     });
// }
// export function printUserData(userId) {
//     getUserData(userId)
//         .then(userData => {
//             console.log(userData);
//         })
//         .catch(error => {
//             console.log(error.message);
//         });
// }