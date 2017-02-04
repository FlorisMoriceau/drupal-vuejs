// Libraries and plugins
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

// Our custom components
import ArticlesListContainer from './ArticlesListContainer.vue'

// Mount points
new Vue({
  el: '#drupal-vuejs',
  components:{ArticlesListContainer}
});
