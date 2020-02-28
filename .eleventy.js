const moment = require('moment');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

moment.locale('en');

module.exports = function(eleventyConfig){
	eleventyConfig.addFilter('dateIso', date => {
		return moment(date).toISOString()
	})

	eleventyConfig.addFilter('dateReadable', date => {
		return moment(date).format('LL')
	})

	eleventyConfig.addShortcode('excerpt', article => extractExcerpt(article))

	eleventyConfig.addPlugin(syntaxHighlight);
	eleventyConfig.addPassthroughCopy("css");

	return {
		addPassthroughCopy: true
	}
}

function extractExcerpt(article){
	if(!article.hasOwnProperty('templateContent')){
		console.warn('Failed to extract excerpt: Document has no property "templateContent".')
		return null
	}

	let excerpt = null
	const content = article.templateContent

	const separatorsList = [
		{start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->'},
		{start: '<p>', end: '</p>'}
	]

	separatorsList.some(separators => {
		const startPosition = content.indexOf(separators.start)
		const endPosition = content.lastIndexOf(separators.end)

		if(startPosition !== -1 && endPosition !== -1){
			excerpt = content.substring(startPosition + separators.start.length, endPosition).trim()
			return true
		}
	})

	return excerpt
}