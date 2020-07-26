<template>
  <div>
    <div class="max-w-4xl">
      <Content />
    </div>
    <nav aria-label="Paging" v-if="$pagination">
      <ul id="default-layout">
        <li v-for="page in $pagination.pages">
          <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
        </li>
      </ul>
      <div id="pagination" class="mt-4">
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Previous</router-link>
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Next</router-link>
      </div>
    </nav>
  </div>
</template>