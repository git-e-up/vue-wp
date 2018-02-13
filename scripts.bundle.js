'use strict';

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello'
  }
});

{
  // GET /someUrl
  undefined.$http.get('http://matthewlissner.com/wp-json/wp/v2/posts?filter[orderby]=date&order=asc').then(function (response) {

    // get body data
    undefined.someData = response.body;
    console.log('hi');
  }, function (response) {
    // error callback
  });
}
