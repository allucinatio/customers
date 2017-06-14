// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function() {

  'use strict';

  // Your Code Goes Here
  // get randomuser api
  fetch('https://randomuser.me/api/?results=12')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        // Get data and assign to variables
        response.json().then(function(data) {
          let dataTwelve = data.results;
          for (var i = 0; i < 12; i++) {
            let picture = data.results[i].picture.large;
            let name = data.results[i].name.first + " " + data.results[i].name.last;
            let email = data.results[i].email;
            let addressFirstLine = data.results[i].location.street;
            let addressSecondLine = data.results[i].location.city + ", " + data.results[i].location.state + " " + data.results[i].location.postcode;
            let phone = data.results[i].phone;

            // make the markup happen
            let markup = `<div class="image"><img src="${picture}"></div>
               <div class = "name"> <span>${name}</span> </div>
               <div class = "email"> ${email} </div>
               <div class = "contact"> ${addressFirstLine}
               <br> ${addressSecondLine}
               <br> ${phone} </div>`

            var mainDiv = document.querySelector('.customers');
            var createDiv = document.createElement('div');
            createDiv.classList.add('person');
            createDiv.innerHTML = markup;
            mainDiv.appendChild(createDiv);
          }
        });
      }
    )
})();
