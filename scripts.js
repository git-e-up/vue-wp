var vm = new Vue({
  el: '#app',
  data: {
    items: [
      // { message: 'Foo' },
      // { message: 'Bar' }
    ]
  },
  mounted: function(){
    this.$http.get('//matthewlissner.com/wp-json/wp/v2/hot_sauces?filter[orderby]=date&order=asc').then(response => {

      // get body data
      // console.log(response.body[1].date);
      // this.$set(this.origin, me)
      // this.items = response.body[0].title.rendered;
      let x = this;
      response.body.forEach(function(i){
        x.items.push({message: i.title.rendered})

        // x.items.message = i.title.rendered;
        // console.log(i.title.rendered);
      })

    }, response => {
      console.log('no');
      // error callback
    });
  }
})

// {
//   // GET /someUrl
//   Vue.http.get('http://matthewlissner.com/wp-json/wp/v2/posts?filter[orderby]=date&order=asc').then(response => {
//
//     // get body data
//     Vue.someData = response.body;
//     console.log(response.body[1]);
//
//   }, response => {
//     console.log('no');
//     // error callback
//   });
// }

Vue.component('my-component', {
  template: '<div>A customz component!</div>'
})
new Vue({
  el: '#example'
})

new Vue({
    el: '#my_view',
    data: {
       origin: ''
    },

    ready: function() {

        // GET request
        this.$http.get('http://httpbin.org/ip', function (data) {
            // set data on vm
            this.$set('origin', data)

        }).error(function (data, status, request) {
            // handle error
        })

      }
})
