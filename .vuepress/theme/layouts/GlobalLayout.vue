<template>
  <div class="container mx-auto">
    <SiteHeader />
    <main class="content">
      <DefaultGlobalLayout />
    </main>
    <SiteFooter />    
  </div>
</template>

<style lang="stylus">
  @import '../styles/style.styl';
</style>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import SiteHeader from "@theme/components/SiteHeader.vue";
import SiteFooter from "@theme/components/SiteFooter.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout, SiteHeader, SiteFooter },
};
</script>