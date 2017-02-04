Vue.use(VueResource);

Vue.component('front-list', {
  props:["articles"],
  template: '<ul><li v-for="article in this.articles">{{ article.title[0].value }}</li></ul>'
});

new Vue({
  el: '#drupal-vuejs',
  data:{
    articles:[],
  },
  mounted:function() {
    this.$http.get('/api/articles').then(function(response) {
      this.articles = response.body;
    });
  }
});
