module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("njk, md");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("css/");
  eleventyConfig.addPassthroughCopy("js/");
};