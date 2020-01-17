import React, { FC } from 'react'
import { Link, graphql } from 'gatsby'
import dayjs from 'dayjs'
import { Layout, SEO } from '../components'
import './index.scss'
import { GatsbyDataProps, BlogNode } from '../utils/interface'

const HomePage: FC<GatsbyDataProps> = (props) => {
  const { data } = props
  const nodes = data.allMarkdownRemark.edges.map(n => n.node) as BlogNode[]

  const latestBlog = nodes
    .filter(node => (node.fields.type === 'blog' && !node.frontmatter.draft))
    .sort((x, y) => new Date(y.fields.date).getTime() - new Date(x.fields.date).getTime())[0]

  const blogCover = latestBlog.frontmatter.cover?.publicURL
  const blogDate = dayjs(latestBlog.fields.date).format('MMM DD, YYYY')

  return (
    <Layout>
      <SEO
        title={data.site.siteMetadata.title}
        exactTitle
        keywords={data.site.siteMetadata.keywords}
      />
      <div className='mf-content'>
        <header className='channel-header'>
          <Link to='/blog' className='title'>最新博客</Link>
          <Link to='/blog' className='more'>查看全部 &raquo;</Link>
        </header>
        <div className='channel-body blogs'>
          <Link className='blog' to={latestBlog.fields.slug}>
            <div className='banner'>
              <img src={blogCover} alt='' />
            </div>
            <div className='info'>
              <h2 className='title'>{latestBlog.frontmatter.title}</h2>
              <p className='desc'>{latestBlog.frontmatter.description}</p>
              <footer className='blog__footer'>
                <p className='date'>
                  <time dateTime={latestBlog.fields.date}>{blogDate}</time>
                </p>
              </footer>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

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
