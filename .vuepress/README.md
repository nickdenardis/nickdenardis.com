# Vuepress theme Canvas

[Vuepress][vuepress] custom theme for blogging inspired on [Canvas: a Simple, Powerful Blog Publishing Platform][canvas]

You can see [my own blog](https://whoan.online) as an example.

## Installation

**As Easy as 1,2,3**

First, create a docs folder if you don't have one yet:

```bash
mkdir docs && cd docs
```

Clone the repo:

```bash
git clone https://github.com/whoan/vuepress-theme-canvas.git .vuepress
```

See it run:

```bash
.vuepress/run.sh
```

------------

You will see a README file in your docs folder and it's there to let `vuepress` render the *Home* page. See more information [here](https://vuepress.vuejs.org/default-theme-config/#homepage).

> Important note: The root README will be ignored by the theme and it won't be listed as a blog post. For the same reason, all its content (except for the front matter) will be ignored.

## Building your brand new blog

> IMPORTANT! You must always use `.vuepress/node_modules/.bin/vuepress` instead of the global `vuepress` for this project


Once you placed your fantastic posts in your docs folder, build your blog like this:

```bash
# cd $your_docs_dir
.vuepress/node_modules/.bin/vuepress build
```

## Set the config file to your needs

Now it's time to personalize your blog's information. Go and change the *congif.js* file with your personal data.

## Features

You can set the **lastModified** date of a blog post in the Front Matter like this:

    lastModified: '2019-09-09'

And you can set **prev** and **next** posts in the footer of your posts adding something like this also in the Front Matter:

    prev: /some-prev-blog
    next: /some-next-blog

To set your personal links in the header of the pages, you have the array `usefulLinks` in the config file.  
You can also set the icon you want to show in each link. Here an example:

    [{
      href: 'https://github.com/whoan',
      cssIcon: 'fa fa-fw fa-github'
    }]

## Limitations

This project is meant to be simple and it has some limitations. Some of them can be addressed with the time, others will never be implemented to maintain its simplicity.

These are the current limitations, based on what you can expect for a blog:

- It lists all the markdown files at the same level regardless the directory they are placed in.
- It doesn't have tags.
- It doesn't have a search bar.
- It doesn't have a lot of other things you can find in other blogs; but it's beautiful, something you don't find in a lot of other blogs.

## Troubleshooting

#### I get a 404 error

It's due to you need a README.md in the root of the project. See [the installation section](#installation).

#### I can't see the posts titles in the main page

Each markdown file (your posts) need a `h1` header, so here you have a suggestion to write:

```markdown
# My Awesome Post
```

#### I get compiling template errors

You need to see which are the hurting files and modify them accordingly to make them markdown compliant. Don't know really which are the common reasons for this problem.

Now you will see the titles the Home page.

## License

[MIT](https://github.com/whoan/vuepress-canvas/blob/master/LICENSE)

[vuepress]: https://github.com/vuejs/vuepress
[canvas]: https://github.com/cnvs/canvas
[vuepress-doc]: https://vuepress.vuejs.org/guide/getting-started.html
