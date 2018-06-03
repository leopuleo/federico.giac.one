module.exports = {
  siteMetadata: {
    title: 'Federico Giacone',
  },
  plugins: [
	  'gatsby-plugin-react-helmet',
	  'gatsby-plugin-catch-links',
	  {
	  	resolve: 'gatsby-source-filesystem',
	  	options: {
	  		path: `${__dirname}/src/pages`,
	  		name: 'pages'
	  	}
	  },
	  {
	    resolve: `gatsby-source-filesystem`,
	    options: {
	      name: `images`,
	      path: `${__dirname}/static/img/`
	    }
	  },
	  'gatsby-transformer-remark', 
	  'gatsby-transformer-sharp',
	  'gatsby-plugin-sharp'
  ],
}
