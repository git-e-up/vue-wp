var vm = new Vue({
  el: '#app',
  data: {
    items: [],
    isActive: false
  },
  mounted: function(){
    this.$http.get('http://matthewlissner.com/wp-json/wp/v2/hot_sauces?filter[orderby]=date&order=asc').then(response => {
      let x = this;
      response.body.forEach(function(val, i){
        x.items.push({message: val.title.rendered})
      })
    }, response => {
      console.log('sorry about that');
      this.isActive = true;
      // error callback
    });
  }
})




// new Vue({
//     el: '#my_view',
//     data: {
//        origin: ''
//     },
//
//     ready: function() {
//
//         // GET request
//         this.$http.get('http://httpbin.org/ip', function (data) {
//             // set data on vm
//             this.$set('origin', data)
//
//         }).error(function (data, status, request) {
//             // handle error
//         })
//
//       }
// })
