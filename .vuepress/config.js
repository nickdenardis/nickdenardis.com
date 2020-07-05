const path = require("path");

module.exports = {
  title: "Nick DeNardis",
  description:
    "User experience, code, higher education, analytics and accessibility.",
  theme: "canvas",
  plugins: [
    [
      "@vuepress/blog",
      {
        pagination: {
          lengthPerPage: 2,
        },
        // sitemap: {
        //   hostname: "http://localhost:8080",
        // },
        // lobalPagination: {
        //   lengthPerPage: 10,
        // },
        // feed: {
        //   canonical_base: "http://localhost:8080",
        // },
      },
    ],
  ],
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: "whoan/vuepress-theme-canvas",

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: "your_user/your_docs_repo",
    // defaults to true, set to false to disable
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Edit this page!",

    // custom property to show links about you
    usefulLinks: [
      {
        title: "Twitter",
        href: "https://twitter.com/nickdenardis",
        cssIcon: "fa fa-fw fa-twitter",
      },
      {
        title: "Github",
        href: "https://github.com/nickdenardis",
        cssIcon: "fa fa-fw fa-github",
      },
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/nickdenardis",
        cssIcon: "fa fa-fw fa-linkedin",
      },
    ],
  },
};
