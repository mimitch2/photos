const path = require('path');
const slash = require('slash');
const gatsbySourceFileSystem = require('gatsby-source-filesystem');

exports.createResolvers = (
    {
        actions,
        cache,
        createNodeId,
        createResolvers,
        reporter,
        store,
    },
) => {
    const { createNode } = actions;
    createResolvers({
        graphCMS_Asset: {
            localFile: {
                type: 'File',
                // resolve args: source, args, context, info
                resolve(source) {
                    return gatsbySourceFileSystem.createRemoteFileNode({
                        url: source.url,
                        cache,
                        createNode,
                        createNodeId,
                        reporter,
                        store,
                    });
                },
            },
        },
    });
};

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions;

    // The “graphql” function allows us to run arbitrary
    // queries against the local Gatsby GraphQL schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
    const result = await graphql(`
  {
    graphCMS {
      allPhotoPost: photosesConnection {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  }
  `);

    // Check for any errors
    if (result.errors) {
        throw new Error(result.errors);
    }

    // Access query results via object destructuring
    const { allPhotoPost } = result.data.graphCMS;

    const postTemplate = path.resolve('./src/templates/post.js');

    allPhotoPost.edges.forEach((edge) => {
        createPage({
            path: `/post/${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
                id: edge.node.id,
            },
        });
    });


    // createPage({
    //     path: '/',
    //     component: path.resolve('./src/pages/index.js'),
    //     context: {
    //         path: '/',
    //     },
    // });
};
