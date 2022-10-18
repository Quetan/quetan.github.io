<template>
  <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title" v-bind:link="post.link" />
</template>

<script>
import BlogPost from './components/blogPost.vue'

export default {
  name: 'App',
  components: {
    BlogPost
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'Введение в фреймворки JavaScript', link: 'https://developer.mozilla.org/ru/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks' },
        { id: 2, title: 'Vue JS и его преимущества', link: 'https://ru.vuejs.org/v2/guide/comparison.html' },
        { id: 3, title: '', link: null },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  text-align: left;
}
</style>
