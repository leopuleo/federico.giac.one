exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
        {
            allPrismicPage {
                nodes {
                    uid
                }
            }
        }
    `);

    results.data.allPrismicPage.nodes.forEach(page => {
        createPage({
            path: `/${page.uid}/`,
            component: require.resolve("./src/templates/page.jsx"),
            context: {
                slug: page.uid
            }
        });
    });
};
