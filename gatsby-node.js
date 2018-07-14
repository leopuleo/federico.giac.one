const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const portfolio = await graphql(`
    {
      allPrismicPortfolio(
      sort: { fields: [data___order], order: ASC }
    ) {
        edges {
          node {
            id
            uid
            lang
            data {
              title {
                text
              }
            }
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

  // Portfolio
  const projects = portfolio.data.allPrismicPortfolio.edges
  projects.forEach(({ node }, index) => {
    let rootLang = '/'
    if (node.lang === 'en-gb') {
      rootLang = '/en/'
    }

    const prev = index === 0 ? false : projects[index - 1].node
    const next = index === projects.length - 1 ? false : projects[index + 1].node

    createPage({
      path: `${rootLang}portfolio/${node.uid}`,
      component: portfolioTemplate,
      context: {
        uid: node.uid,
        prev,
        next
      },
    })
  })

  // Pagine default
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
