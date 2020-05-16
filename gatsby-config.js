module.exports = {
  siteMetadata: {
    title: `Federico Giacone`,
    description: `Federico Giacone website`,
    author: `Leonardo Giacone`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Federico Giacone`,
        short_name: `Portfolio`,
        start_url: `/?utm_source=PWA&utm_medium=HomeIcon`,
        background_color: `#f5f5f5`,
        theme_color: `#161616`,
        display: `fullscreen`,
        orientation: `portrait`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
