<template>
  <div class="text-center">
    <h1 v-text="effectiveTitle"></h1>
    <time v-text="postDate" v-bind:datetime="this.$frontmatter.date" class="inline-block border-b-4 border-gray-500 pb-4"></time>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    title: String
  },
  computed: {
    effectiveTitle() {
      return this.title || this.$page.title;
    },
    postDate() {
      return moment(this.$frontmatter.date).format('MMMM Do, YYYY');
    }
  }
};
</script>