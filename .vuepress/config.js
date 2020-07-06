module.exports = {
  title: "Nick DeNardis",
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
};
