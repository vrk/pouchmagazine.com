export default async function (eleventyConfig) {
  eleventyConfig.setTemplateFormats("njk, md");
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("scripts/");
  eleventyConfig.addPassthroughCopy("pouch-01/images/");
  eleventyConfig.addPassthroughCopy("survey/images/");
  eleventyConfig.addPassthroughCopy("css/");
  eleventyConfig.addPassthroughCopy("js/");
};