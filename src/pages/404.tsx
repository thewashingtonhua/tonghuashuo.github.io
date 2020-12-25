import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout, SEO } from '../components'
import './404.scss'

const code = `(function whatJustHappened () {
  return \`
    Whatever you are looking for.
    It's not here.
    (any more)
  \`
})()
`

const PageNotFound = () => (
  <Layout>
    <SEO title='404' />
    <div className='mf-content' id='page-not-found'>
      <h1>404</h1>
      <pre>
        <code dangerouslySetInnerHTML={{
          __html: code
        }} />
      </pre>
      <Link className='btn-back' to='/'>return</Link>
    </div>
  </Layout>
)

export default PageNotFound

export const query = graphql`
query {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          description
          from
          to
          tags
          cover {
            publicURL
          }
          series
          draft
          original
        }
        fields {
          slug
          type
          date
        }
        excerpt
      }
    }
  }
}`