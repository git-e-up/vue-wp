var app = new Vue({
  el: '#app',
    data: {
    message: 'Helloz'
  }
})

{
  // GET /someUrl
  Vue.http.get('http://matthewlissner.com/wp-json/wp/v2/posts?filter[orderby]=date&order=asc').then(response => {

    // get body data
    Vue.someData = response.body;
    console.log(response.body[1]);

  }, response => {
    console.log('no');
    // error callback
  });
}
