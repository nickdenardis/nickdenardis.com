<template>
  <div class="container mx-auto">
    <header class="mx-4">
      <div class="">
        <router-link to="/" class="text-5xl hover:underline">{{ $site.title }}</router-link>
        {{ $site.description }}
      </div>
    </header>
    <main class="content">
      <DefaultGlobalLayout />
    </main>
    <nav aria-label="Main" class="text-center py-3">
      <ul class="list-none">
        <li v-for="page in $themeConfig.nav" class="inline-block">
          <a v-if="page.type === 'external'" :href="page.link" class="p-4 underline hover:no-underline">{{ page.text }}</a>
          <router-link v-else class="p-4 page-link underline hover:no-underline" :to="page.link">{{ page.text }}</router-link>
        </li>
      </ul>
    </nav>
    <footer class="pt-3 border-t border-solid border-1 border-gray-400">
      <p>
        <a href="https://github.com/nickdenardis/nickdenardis.com">Github</a> · Powered by VuePress
      </p>
    </footer>
  </div>
</template>

<style lang="stylus">
  @import '../styles/style.styl';
</style>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout },
};
</script>