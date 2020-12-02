require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`
});

const {
    NODE_ENV,
    GOOGLE_TAGMANAGER_ID,
    URL: NETLIFY_SITE_URL = "https://federico.giac.one",
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;

const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

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
                link: "https://www.instagram.com/giacone.federico/"
            },
            {
                type: "facebook",
                link: "https://www.facebook.com/federico.giacone.5"
            }
        ]
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-react-helmet",
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-postcss",
        "gatsby-plugin-smoothscroll",
        {
            resolve: "gatsby-plugin-purgecss",
            options: {
                printRejected: false,
                develop: false,
                tailwind: true
            }
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /assets/
                }
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/assets/images`
            }
        },
        {
            resolve: "gatsby-source-instagram",
            options: {
                username: "5813675480"
            }
        },
        {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: GOOGLE_TAGMANAGER_ID,
                includeInDevelopment: false
            }
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
                icon: `src/assets/images/icon.png`
            }
        },
        "gatsby-plugin-offline"
    ]
};
