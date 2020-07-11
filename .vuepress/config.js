module.exports = {
  title: "Nick DeNardis",
  description:
    "User experience, code, higher education, analytics and accessibility.",
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
            itemPermalink: "/:year/:month/:day/:slug",
            pagination: {
              perPagePosts: 10,
            },
          },
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tag",
            frontmatter: { title: "Tag" },
            itemlayout: "Tag",
            pagination: {
              perPagePosts: 3,
            },
          },
        ],
        sitemap: {
          hostname: "http://localhost:8080",
        },
        feed: {
          canonical_base: "http://localhost:8080",
        },
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-2439165-1",
      },
    ],
  ],
  themeConfig: {
    nav: [
      { text: "About Nick DeNardis", link: "/about/" },
      { text: "Speaking", link: "/speaking-engagements/" },
      { text: "Feeds", link: "/feeds/" },
      {
        text: "Twitter",
        link: "https://twitter.com/nickdenardis",
        type: "external",
      },
    ],
  },
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js"),
    ],
  },
};
