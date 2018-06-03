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
  	{
    	resolve: "gatsby-transformer-remark",
    	options: {
      	plugins: [
      		{
	        	resolve: `gatsby-remark-relative-images`,
	        	options: {
	        		name: 'img'
	        	}
	        },
        		{
          		resolve: "gatsby-remark-images",
          		options: {
              		maxWidth: 690,
              		linkImagesToOriginal: false
         			}
       		}
   		  ]
   	  }
	  }
  ],
}
