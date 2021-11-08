module.exports = {
  title: "Nick DeNardis",
  description:
    "User experience, code, higher education, analytics and accessibility.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
  ],
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
              lengthPerPage: 15,
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
          hostname: "https://nickdenardis.com",
        },
        feed: {
          canonical_base: "https://nickdenardis.com",
        },
      },
    ],
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-2439165-1",
      },
    ]
  ],
  themeConfig: {
    nav: [
      { text: "About Nick DeNardis", link: "/about/" },
      { text: "Accessibility", link: "/a11y/" },
      { text: "User experience", link: "/2021/11/08/introduction-to-user-experience-course/" },
      { text: "/Feeds", link: "/feeds/" },
    ],
    social: [
      {
        text: "Twitter",
        link: "https://twitter.com/nickdenardis",
      },
      {
        text: "Instagram",
        link: "https://www.instagram.com/devhomeownership/",
      },
      {
        text: "Github",
        link: "https://github.com/nickdenardis/nickdenardis.com",
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
