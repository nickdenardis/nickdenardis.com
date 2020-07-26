<template>
  <div>
    <h1 v-text="effectiveTitle"></h1>
    <time v-text="postDate" class=""></time>
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