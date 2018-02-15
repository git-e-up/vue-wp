var vm = new Vue({
  el: '#app',
  data: {
    items: [],
    isActive: false,
    show: true,
    introMessage:  'Hiyo'
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
  },
  methods: {
    begin: function (event) {
      setTimeout(() => {
        let elements = document.getElementsByClassName('main-nav__item');
        elements[0].classList.add('main-nav__item--bouncing');
        console.log(elements[0].innerHTML);
        // this.introMessage = elements[0].innerHTML;
        this.introMessage = this.items[0].message;
      }, 1000);
    },
    bounce: function (event) {
      this.items.forEach(function(val, i){
        let elements = document.getElementsByClassName('main-nav__item');
        elements[i].classList.remove('main-nav__item--bouncing');
      })
      event.target.classList.add('main-nav__item--bouncing');
      this.introMessage = event.target.innerHTML;
    }
  },
  beforeMount(){
     this.begin()
  },

})

// var fade = document.getElementsByClassName('init-header');
//
// function fadeIn(el) {
//   el.style.opacity = 0;
//
//
//   var tick = function() {
//     el.style.opacity = +el.style.opacity + 0.01;
//
//
//     if (+el.style.opacity < 1) {
//       (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
//     }
//   };
//
//   tick();
// }
//
// fadeIn(fade);
