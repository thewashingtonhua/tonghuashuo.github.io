import React from 'react'
import { Link, graphql } from 'gatsby'
import dayjs from 'dayjs'
import Layout from '../components/layout'
import SEO from '../components/seo'
import 'normalize-scss/sass/normalize/_import-now.scss'
import '../styles/prism-styles.scss'
import './blog-post.scss'

export default ({ data }) => {
  const post = data.markdownRemark

  const cover = post.frontmatter.cover
    ? post.frontmatter.cover.publicURL
    : ''
  const date = dayjs(post.fields.date).format('MMM DD, YYYY')

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title} | 博客`}
        keywords={data.site.siteMetadata.keywords}
      />

      <div className='mf-content blog-post'>
        <p className='back-to-parent'><Link to='/blog'>&laquo; 回到博客列表</Link></p>
        <article className={post.frontmatter.draft ? ' draft' : ''} id={`blog__${post.fields.id}`}>
          <h1 className='title'>{post.frontmatter.title}</h1>
          <div className='metas'>
            <p className='publish-date'>
              <time dateTime={post.fields.date}>{date}</time>
            </p>
            {/* <p className='tags'>Tags: {post.frontmatter.tags.join(', ')}</p> */}
          </div>
          <div className='banner'>
            <img src={cover} alt='' />
          </div>
          <div className='content' dangerouslySetInnerHTML={{ __html: post.html }} />
        </article>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      description
      cover {
        publicURL
      }
      tags
      series
      draft
    }
    fields {
      id
      date
    }
  }
}`