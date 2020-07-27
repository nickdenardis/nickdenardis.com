<template>
  <header class="px-4 md:flex md:items-stretch md:justify-between">
    <h1 class="md:flex-auto ">
        <router-link to="/" class="text-5xl hover:underline">{{ $site.title }}</router-link>
        <p class="text-gray-700">{{ $site.description }}</p>
    </h1>

    <nav aria-label="Main" class="md:self-center" id="nav">
      <ul class="list-none py-3">
        <li v-for="page in $themeConfig.nav" class="inline-block">
          <a v-if="page.type === 'external'" :href="page.link" class="p-4 pl-0 md:p-4 underline hover:no-underline">{{ page.text }}</a>
          <router-link v-else class="p-4 pl-0  md:p-4 page-link underline hover:no-underline" :to="page.link">{{ page.text }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>