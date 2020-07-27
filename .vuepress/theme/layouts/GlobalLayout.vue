<template>
  <div class="container mx-auto">
    <!-- <SkipTo /> -->
    <SiteHeader />
    <main class="prose prose-xl min-w-full mx-6 lg:mx-4 my-10" id="main">
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
import SkipTo from "@theme/components/SkipTo.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout, SiteHeader, SiteFooter, SkipTo},
};
</script>