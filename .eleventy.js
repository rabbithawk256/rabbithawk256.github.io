const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const socialShareCardGenerator = require("eleventy-plugin-social-share-card-generator/dist/lib");
const metagen = require('eleventy-plugin-metagen');
const { DateTime } = require("luxon");
const mdIt = require('markdown-it');
const markdownItHeaderSections = require("markdown-it-header-sections");

// Adds a <section> tag for paragraphs inbetween headers. Kinda useless
// Outside of some CSS styling
module.exports = function (eleventyConfig) {
	var md = require("markdown-it")().use(require("markdown-it-footnote"));
	eleventyConfig.amendLibrary("md", mdLib => mdLib.use(markdownItHeaderSections));
	eleventyConfig.addShortcode(
		"workCard",
		function (workTitle, workType, workDescription) {
			return ```
    <h1>${workTitle}</h1>
    <h2>${workType}</h2>
    <h3>${workDescription}</h3>
  ```;
	});
	const mdLib = mdIt().use(markdownItHeaderSections);
	// This is ripped from an old version of the website, so it may be clunky
	eleventyConfig.addPairedShortcode("callout", function(calloutContent, level, title) {
		return `<div class="callout-${level}">
		<div class="callout-level"><i class="callout-icon-${level}"></i>${title}</div>
		<div class="callout-content">${calloutContent}</div>
		</div>`;
	  });
	// Plugin additions
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(metagen);
	// Passthrough copy
	eleventyConfig.addPassthroughCopy("./assets/**/*");
	eleventyConfig.addPassthroughCopy({ "./assets/img/favicon": "/" });
	// Collections
	eleventyConfig.addCollection("blog", function (collection) {
		return collection.getFilteredByGlob("./content/blog/**/*.md");
	});
	eleventyConfig.addCollection("about", function (collection) {
		return collection.getFilteredByGlob("./content/about/**/*.md");
	});
	eleventyConfig.addCollection("work", function (collection) {
		return collection.getFilteredByGlob("./content/work/**/*.md");
	});
	// Date filters
	eleventyConfig.addFilter("8601format", (dateString) => {
		dateObj = new Date(dateString);
		return DateTime.fromJSDate(dateObj, { zone: "gmt" }).toFormat(
			"yyyy-MM-dd"
		);
	});
	eleventyConfig.addFilter("postYear", (dateString) => {
		dateObj = new Date(dateString);
		return DateTime.fromJSDate(dateObj, { zone: "gmt" }).toFormat("yyyy");
	});

	// Markdown filters
	eleventyConfig.addFilter("markdown", (text) => mdLib.renderInline(text));
	// custom directories
	return {
		dir: {
			output: "docs",
			input: "content",
			includes: "../_layouts",
		},
	};
};
