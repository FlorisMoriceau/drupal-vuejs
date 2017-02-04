<template>
  <ul>
    <li v-for="article in this.articles">{{ article.title[0].value }}</li>
  </ul>
</template>

<script>
    export default{
        props:['articles'],
    }
</script>
