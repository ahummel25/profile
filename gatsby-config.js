module.exports = {
  siteMetadata: {
    title: 'Andrew Hummel | Full Stack Developer',
    description:
      'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://ahummel25.github.io/profile',
    iconUrl: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    robotoFontsUrl:
      'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i',
    faUrl:
      'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    author: {
      name: 'Andrew W. Hummel',
      url: 'https://github.com/ahummel25',
      email: 'ahummel25@gmail.com'
    }
  },
  pathPrefix: '/profile',
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-178744864-1',
        head: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Andrew Hummel Profile',
        short_name: 'Profile',
        start_url: '/',
        background_color: '#F8F8F8',
        theme_color: '#F8F8F8',
        display: 'standalone',
        icon: `${__dirname}/src/images/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://ahummel25.github.io/profile'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
