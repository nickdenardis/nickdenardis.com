<template>
    <footer class="pt-3 border-t border-solid border-1 border-gray-400" id="footer">
      <p>
        <span v-for="social in $themeConfig.social">
          <a :href="social.link" class="hover:underline p-3" rel="me">{{ social.text }}</a> · 
        </span>
        <span class="p-3">Powered by VuePress</span>
      </p>
    </footer>
</template>

<script>
export default {};
</script>