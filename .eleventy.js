module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("njk, md");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("pouch-01/images/");
  eleventyConfig.addPassthroughCopy("survey/images/");
  eleventyConfig.addPassthroughCopy("css/");
  eleventyConfig.addPassthroughCopy("js/");
};