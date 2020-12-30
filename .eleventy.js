module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('resources');

    return {
      passthroughFileCopy: true
    }
  }