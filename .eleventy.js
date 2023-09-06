const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("workCard", function(workTitle, workType, workDescription) {
    return ```
    <h1>${workTitle}</h1>
    <h2>${workType}</h2>
    <h3>${workDescription}</h3>
  ```});
  // Plugin additions
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // Passthrough copy
  eleventyConfig.addPassthroughCopy("./assets/**/*");

  // Collections
  eleventyConfig.addCollection("blog", function (collection) {
    return collection.getFilteredByGlob("./content/blog/**/*.md");
  });
  eleventyConfig.addCollection("about", function (collection) {
    return collection.getFilteredByGlob("./about/**/*.md");
  });
  eleventyConfig.addCollection("work", function (collection) {
    return collection.getFilteredByGlob("./work/**/*.md");
  });
  // Date filters
  eleventyConfig.addFilter("8601format", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: "gmt" }).toFormat("yyyy-MM-dd");
  });
  eleventyConfig.addFilter("postYear", (dateString) => {
    dateObj = new Date(dateString);
    return DateTime.fromJSDate(dateObj, { zone: "gmt" }).toFormat("yyyy");
  });
  // custom directories
  return {
    dir: {
      output: "docs",
      input: "content",
      includes: "../_layouts",
    },
  };
};
