const path = require('path')
const sass = require('sass');

const CleanCSS = require('clean-css')

const inputFile = path.join(__dirname, '../../_includes/scss/main.sass')
const outputFile = path.join(__dirname, '../../assets/css/style.css')

module.exports = class {
  data() {
    return {
      layout: '',
      permalink: 'assets/css/style.css',
      eleventyExcludeFromCollections: true
    }
  }

  render() {
    const { css } = sass.compile(inputFile)
    const output = new CleanCSS({}).minify(css).styles
    return output
  }
}
