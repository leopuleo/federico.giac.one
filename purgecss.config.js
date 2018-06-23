module.exports = {
  content: ['./public/**/*.html', './src/**/*.js'],
  css: ['./src/layouts/index.css', './src/layouts/tailwind.css'],
  fontFace: true,
  keyframes: true,
  whitelist: ['body', 'html'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g)
        }
      },
      extensions: ['html', 'js'],
    },
  ],
}
