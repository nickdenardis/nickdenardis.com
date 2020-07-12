<template>
  <div>
    <time v-text="postDate"></time>
    <h1 v-text="effectiveTitle"></h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  computed: {
    effectiveTitle() {
      return this.title || this.$page.title;
    },
    postDate() {
      return this.$frontmatter.date;
    }
  }
};
</script>