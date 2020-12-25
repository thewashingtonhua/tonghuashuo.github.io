const { createFilePath } = require(`gatsby-source-filesystem`)

const BLOG_POST_FILENAME_REGEX = /([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\.md$/

module.exports = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const { relativePath } = getNode(node.parent)

    let id = ''
    let slug = ''
    let type = ''

    if (relativePath.includes('blog')) {
      const match = BLOG_POST_FILENAME_REGEX.exec(relativePath)
      const [, year, month, day, filename] = match

      id = filename
      slug = `/blog/${year}/${month}/${day}/${filename}`
      type = 'blog'

      const date = `${year}-${month}-${day}`
      createNodeField({ node, name: 'date', value: date })
    }

    if (relativePath.includes('project')) {
      const projectName = relativePath.slice(8, -3)

      id = projectName
      slug = `/project/${projectName}`
      type = 'project'
    }

    createNodeField({ node, name: 'id', value: id, })
    createNodeField({ node, name: 'type', value: type, })
    createNodeField({ node, name: 'slug', value: slug, })
  }
}