module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `SpeedOpp`,
              short_name: `SpeedOpp`,
              start_url: `/`,
              background_color: `#F7F9FB`,
              theme_color: `#FB6100`,
              display: `standalone`,
              icon:'static/images/S Logo color .png',
            },
          },

        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              trackingId: "UA-159937109-3",
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        `gatsby-transformer-sharp`, 
        `gatsby-plugin-sharp`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
