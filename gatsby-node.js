const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // Pagine default
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

  const pageTemplate = path.resolve('src/templates/singlePage.js')
  pages.data.allPrismicPage.edges.forEach(edge => {
    let rootLang = '/'
    if (edge.node.lang === 'en-gb') {
      rootLang = '/en/'
    }

    createPage({
      path: `${rootLang}${edge.node.uid}/`,
      component: pageTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })

  // Portfolio
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
            fields {
              slug
            }
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

  const projects = portfolio.data.allPrismicPortfolio.edges
  const portfolioTemplate = path.resolve('src/templates/singlePortfolio.js')

  projects.forEach(({ node }, index) => {
    let rootLang = '/'
    if (node.lang === 'en-gb') {
      rootLang = '/en/'
    }

    const prev = index === 0 ? null : projects[index - 1].node
    const next = index === projects.length - 1 ? null : projects[index + 1].node

    createPage({
      path: `${rootLang}portfolio/${node.uid}/`,
      component: portfolioTemplate,
      context: {
        uid: node.uid,
        prev,
        next
      },
    })
  })

  // About
  createPage({
    path: '/chi-sono/',
    component: path.resolve(`./src/templates/about.js`),
    // The context is passed as props to the component as well
    // as into the component's GraphQL query.
    context: {
      uid: 'chi-sono',
    },
  })
}

// Aggiunto slug per con trailslash per navigazione tra i progetti
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  let rootLang = '/'
  if (node.lang === 'en-gb') {
    rootLang = '/en/'
  }

  if (node.internal.type === `PrismicPortfolio`) {
    const slug = `${rootLang}portfolio/${node.uid}/`
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /shufflejs/,
      loader: 'null-loader',
    })
  }
}
