<script>
  import ArticlesList from "./ArticlesList.vue"
  export default{
    data:function() {
      return {
        articles:[]
      }
    },
    created:function() {
      this.$http.get('/api/articles').then(function(response) {
        this.articles = response.body;
      });
    },
    components:{ArticlesList}
  }
</script>

<template>
  <articles-list :articles="articles" />
</template>


