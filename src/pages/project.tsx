import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './project.scss'
import { GatsbyDataProps } from '../utils/interface'
import { IS_PROD } from 'config';

export default (props: GatsbyDataProps) => {
  const { data } = props
  const nodes = data.allMarkdownRemark.edges.map(n => n.node)
  const projects = nodes
    .filter(node => node.fields.type === 'project')
    .filter(node => !IS_PROD || !node.frontmatter.draft)
    .sort((x, y) => new Date(y.frontmatter.from).getTime() - new Date(x.frontmatter.from).getTime())

  const personalProjects = projects.filter(node => node.frontmatter.category === 'personal')
  const commercialProjects = projects.filter(node => node.frontmatter.category === 'commercial')

  const visibleProjects = []
  if (personalProjects.length) {
    visibleProjects.push({ title: '个人作品', data: personalProjects })
  }
  if (commercialProjects.length) {
    visibleProjects.push({ title: '商业作品', data: commercialProjects })
  }

  const totalCount = visibleProjects.map(n => n.data.length).reduce((x, y) => x + y, 0)

  return (
    <Layout>
      <SEO
        title='代表作'
        keywords={data.site.siteMetadata.keywords}
      />
      <div className='mf-content project-catalog'>
        <h1 className='title'>代表作 ({totalCount})</h1>
        { visibleProjects.map(item =>
          <Fragment key={item.title}>
            <h2 className='project-category-title'>{item.title} ({item.data.length})</h2>
            <div className='project-list'>
              { item.data.map(node => {
                const cover = node.frontmatter.cover
                  ? node.frontmatter.cover.publicURL
                  : ''
                return (
                  <Link className={'project' + (node.frontmatter.draft ? ' draft' : '')} to={node.fields.slug} key={node.fields.slug} id={node.fields.id}>
                    <div className='cover'>
                      <img src={cover} alt='' />
                    </div>
                    <div className='intro'>
                      <h2>{node.frontmatter.title}</h2>
                      <p>{node.frontmatter.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </Fragment>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
  allMarkdownRemark(sort: { fields: [frontmatter___from], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          description
          cover {
            publicURL
          }
          from
          to
          draft
          category
        }
        fields {
          id
          slug
          type
        }
      }
    }
  }
}`