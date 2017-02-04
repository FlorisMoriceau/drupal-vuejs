import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import FrontList from './FrontList.vue'

Vue.use(VueResource);

new Vue({
  el: '#drupal-vuejs',
  data:{
    articles:[],
  },
  mounted:function() {
    this.$http.get('/api/articles').then(function(response) {
      this.articles = response.body;
    });
  },
  components:{
    FrontList
  }
});
