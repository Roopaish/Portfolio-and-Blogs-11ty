module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css")
  eleventyConfig.addPassthroughCopy("./src/portfolio.css")
  eleventyConfig.addPassthroughCopy("./src/assets")

  return {
    dir: {
      input: "src",
      output: "public",
    },
  }
}
