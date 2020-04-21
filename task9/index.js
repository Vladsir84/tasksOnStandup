function onSuccess(response) {
    response.json()
    .then(function(data) {
      console.log(data)
    })
}


// const baseUrl = 'https://5e5af5eb37d2eh0016796f52.mockapi.io/api/v1/users';
   
const request = fetch('https://5e5af5eb37d2eh0016796f52.mockapi.io/api/v1/users')
 .then(onSuccess)
 .then(function(data) {
    console.log(data)
  }) ;
console.log(request);
console.log(request.then(onSuccess));

