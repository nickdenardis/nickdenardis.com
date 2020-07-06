<template>
  <div id="global-layout">
    <header>
      <h1>
        <router-link to="/">{{ $site.title }}</router-link>
      </h1>
    </header>
    <main>
      <DefaultGlobalLayout />
    </main>
    <nav aria-label="Main">
      <ul>
        <li>
          <router-link to="/tag/">Tags</router-link>
        </li>
      </ul>
    </nav>
    <footer>
      <p>
        <a href="https://github.com/nickdenardis/nickdenardis.com">Github</a> · Powered by VuePress
      </p>
    </footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";

export default {
  components: { DefaultGlobalLayout: GlobalLayout }
};
</script>
