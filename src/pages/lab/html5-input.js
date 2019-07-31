import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import './lab.scss'
import './html5-input.scss'
import { GatsbyDataProps } from '../../utils/interface'

const types = ['text', 'password', 'tel', 'email', 'file', 'date', 'datetime', 'number', 'url', 'search', 'range', 'color']

const HTML5Input = (props: GatsbyDataProps) => {
  return (
    <Layout>
      <SEO
        title='Input Type | 实验室'
        keywords={props.data.site.siteMetadata.keywords}
      />
      <div className='mf-content lab-item' id='lab-html5-input'>
        <article>
          <Link to='/lab' className='back'>&laquo; Back</Link>

          <h1>Input</h1>

          { types.map(type => (
            <Fragment key={type}>
              <label htmlFor={type}>{type}</label>
              <input
                type={type}
                name={type}
                id={type}
                placeholder={type}
              />
            </Fragment>
          ))}
        </article>
      </div>
    </Layout>
  )
}

export default HTML5Input
export const query = graphql`
query {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
}`