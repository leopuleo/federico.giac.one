require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: 'Federico Giacone',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'federicogiaconeportfolio',
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => doc => {
          let rootLang = '/'
          if (doc.lang === 'en-gb') {
            rootLang = '/en/'
          }

          switch (doc.type) {
            case 'portfolio':
              return `${rootLang}portfolio/${doc.uid}/`
            default:
              return `${rootLang}${doc.uid}/`
          }
        },
        htmlSerializer: ({ node, key, value }) => (type, element, content, children) => {
          // Your HTML serializer
        },
      },
    },
  ],
}
