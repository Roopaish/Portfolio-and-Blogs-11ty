const pluginTailwind = require("eleventy-plugin-tailwindcss")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (config) => {
  config.addPlugin(pluginTailwind, {
    src: "src/assets/css/*",
  })

  config.addPlugin(syntaxHighlight)

  config.setDataDeepMerge(true)

  config.addPassthroughCopy("src/admin/")
  config.addPassthroughCopy("src/assets/img/**/*")
  config.addPassthroughCopy({ "src/posts/img/**/*": "assets/img/" })

  config.addWatchTarget("src/assets/js/")

  config.addLayoutAlias("default", "layouts/default.njk")
  config.addLayoutAlias("post", "layouts/post.njk")

  config.addFilter("readableDate", require("./lib/filters/readableDate"))
  config.addFilter("minifyJs", require("./lib/filters/minifyJs"))

  config.addTransform("minifyHtml", require("./lib/transforms/minifyHtml"))

  config.addCollection("posts", require("./lib/collections/posts"))
  config.addCollection("tagList", require("./lib/collections/tagList"))
  config.addCollection("pagedPosts", require("./lib/collections/pagedPosts"))
  config.addCollection(
    "pagedPostsByTag",
    require("./lib/collections/pagedPostsByTag")
  )

  // generate id for headings
  // this works because Eleventy also installs markdown-it
  const markdownIt = require("markdown-it")

  // create a new markdown-it instance with the plugin
  const markdownItAnchor = require("markdown-it-anchor")
  const markdownLib = markdownIt({ html: true }).use(markdownItAnchor)

  // replace the default markdown-it instance
  config.setLibrary("md", markdownLib)

  // Open external links in new tab
  const mdIterator = require("markdown-it-for-inline")
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(mdIterator, "url_new_win", "link_open", function (tokens, idx) {
      const [attrName, href] = tokens[idx].attrs.find(
        (attr) => attr[0] === "href"
      )

      if (
        href &&
        !href.includes("rupeshbudhathoki.com.np/") &&
        !href.startsWith("/") &&
        !href.startsWith("#")
      ) {
        tokens[idx].attrPush(["target", "_blank"])
        tokens[idx].attrPush(["rel", "noopener noreferrer"])
      }
    }).use(markdownItAnchor, {
      // permalink: true,
      // permalinkClass: "direct-link",
      // permalinkSymbol: "#"
    })
  config.setLibrary("md", markdownLibrary)

  return {
    dir: {
      input: "src",
      output: "public",
    },
    // pathPrefix: "/subfolder/",
    templateFormats: ["md", "njk", "html"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}
