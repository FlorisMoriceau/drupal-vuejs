Vue.use(VueResource);

Vue.component('front-list', {
  data:function() {
    return {
      articles:[]
    }
  },
  created: function () {
    this.$http.get('/api/articles').then(function(response) {
      this.articles = response.body;
      console.log(response.body)
    });
  },
  template: '<ul><li v-for="article in this.articles">{{ article.title[0].value }}</li></ul>'
});

var app = new Vue({
  el: '#drupal-vuejs',
  template:"<front-list />"
});
