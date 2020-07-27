<template>
  <vue-skip-to
    list-label="Skip to"
    :to="[
        { anchor: '#nav', label: 'Navigation' },
        { anchor: '#main', label: 'Main content' },
        { anchor: '#footer', label: 'Footer' },
      ]"
  ></vue-skip-to>
</template>
<script>
import VueSkipTo from "@vue-a11y/skip-to";

export default {
  components: { VueSkipTo },
};
</script>