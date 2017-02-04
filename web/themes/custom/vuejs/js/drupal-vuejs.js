
Vue.component('front-list', {
  data:function() {
    return {
      articles:[
        {
          title:"titre 1"
        },
        {
          title:"titre 2"
        },
        {
          title:"titre 3"
        }
      ]
    }
  },
  template: '<ul><li v-for="article in this.articles">{{ article.title }}</li></ul>'
});

var app = new Vue({
  el: '#drupal-vuejs',
  template:"<front-list />"
});
