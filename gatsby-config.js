const dotenv = require('dotenv');

dotenv.config({
    path: '.env',
});

module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITE_URL,
        title: 'Mike J Mitchell Photography | Photos by Mike J. Mitchell | Photgoraphy',
        description: 'Photos by Mike J. Mitchell.',
        author: '@mimitch',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'utils/typography',
            },
        },
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-lodash',
            options: {
                disabledFeatures: [
                    'shorthands',
                    'cloning',
                    'currying',
                    'exotics',
                    'metadata',
                    'chaining',
                    'memoizing',
                    'placeholders',
                ],
            },
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'graphCMS',
                fieldName: 'graphCMS',
                url: process.env.GRAPH_CMS_ENDPOINT,
                headers: {
                    Authorization: `Bearer ${process.env.GRAPH_CMS_TOKEN}`,
                },
                fetchOptions: {},
            },
        },
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                data: '@import "_variables.scss";',
                includePaths: ['src/scss'],
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Mike J Mitchell Photography',
                short_name: 'Mike J Mitchell Photography',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/camera-24.png', // This path is relative to the root of the site.
            },
        },
    ],
};
