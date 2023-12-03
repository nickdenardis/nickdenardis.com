module.exports = {
  purge: [
    './dist/**/*.html',
    './.vuepress/**/*.vue',
    './_posts/**/*.md',
    './.vuepress/**/*.scss',
    './node_modules/**/*vuepress*/!(node_modules)/**/*.@(js|md|vue|html)`',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  output: {
    hashFunction: "xxhash64"
  },
}
