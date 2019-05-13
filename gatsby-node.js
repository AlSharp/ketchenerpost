const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve('src/templates/article.js');

    resolve(graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path,
                date
                title
                author
                short_version
              }
              id
            }
          }
        }
      }
    `).then(res => {
      if(res.errors) {
        console.log('ERRORS:', res.errors);
        return reject(res.errors);
      }
      res.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: node.frontmatter.path,
          component: articleTemplate
        })
      })
    })
    )
  })
}
