const path = require('path');

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

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
  `);

  const portfolioTemplate = path.resolve('src/templates/singlePortfolio.js');

  portfolio.data.allPrismicPortfolio.edges.forEach(edge => {

    let rootLang = '/'
    if(edge.node.lang === 'en-gb') {
      rootLang = '/en/'
    }

    createPage({
      path: `${rootLang}portfolio/${edge.node.uid}`,
      component: portfolioTemplate,
      context: {
        uid: edge.node.uid,
      },
    });
  });
};
