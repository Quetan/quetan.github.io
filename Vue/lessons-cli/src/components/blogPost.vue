<template>
  <h2>{{ formatTitle }}</h2>
  <openBlogLink :link="link" />
</template>

<script>
import openBlogLink from './openBlogLink.vue';

export default {
  name: 'BlogPost',
  components: {
    openBlogLink
  },
  props: {
    title: String,
    link: String,
  },
  computed: {
    formatTitle() {
      if (this.title.length > 0) {
        return 'Запись - «' + this.title + '»'
      } else {
        return 'Заголовок отсутствует...'
      }
    }
  },
}
</script>

<style scoped>
</style>
