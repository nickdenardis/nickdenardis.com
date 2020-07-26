<template>
  <article class="pt-10 sm:mx-12 lg:mx-20 xl:mx-24">
          <PostHeader />
          <Content />
  </article>
</template>
<script>
import PostHeader from "@theme/components/PostHeader.vue";
export default {
  components: { PostHeader }
};
</script>