module.exports = {
  siteMetadata: {
    title: "Federico Giacone",
    description: "Il maisdabòsch",
    author: "Leonardo Giacone",
    email: "federico@giac.one",
    phone: "+39 329 53 56 947",
    vat: "IT03746370042",
    social: [
      {
        type: "instagram",
        link: "https://www.instagram.com/giacone.federico/",
      },
      {
        type: "facebook",
        link: "https://www.facebook.com/federico.giacone.5",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: "5813675480",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Federico Giacone",
        short_name: "Portfolio",
        start_url: "/?utm_source=PWA&utm_medium=HomeIcon",
        background_color: "#f5f5f5",
        theme_color: "#161616",
        display: "fullscreen",
        orientation: "portrait",
        icon: `src/assets/images/icon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
};
