const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const portfolio = await graphql(`
    {
      allPrismicPortfolio {
        edges {
          node {
            id
            uid
            lang
          }
        }
      }
    }
  `)

  const pages = await graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
            lang
          }
        }
      }
    }
  `)

  const portfolioTemplate = path.resolve('src/templates/singlePortfolio.js')
  const pageTemplate = path.resolve('src/templates/singlePage.js')

  portfolio.data.allPrismicPortfolio.edges.forEach(edge => {
    let rootLang = '/'
    if (edge.node.lang === 'en-gb') {
      rootLang = '/en/'
    }

    createPage({
      path: `${rootLang}portfolio/${edge.node.uid}`,
      component: portfolioTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  pages.data.allPrismicPage.edges.forEach(edge => {
    let rootLang = '/'
    if (edge.node.lang === 'en-gb') {
      rootLang = '/en/'
    }

    createPage({
      path: `${rootLang}${edge.node.uid}`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /shufflejs/,
      loader: 'null-loader',
    })
  }
}
