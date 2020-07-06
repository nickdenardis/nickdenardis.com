<template>
  <div>
    <Content />
    <nav aria-label="Paging" v-if="$pagination">
      <ul id="default-layout">
        <li v-for="page in $pagination.pages">
          <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
        </li>
      </ul>
      <div id="pagination">
        <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Previous</router-link>
        <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
      </div>
    </nav>
  </div>
</template>