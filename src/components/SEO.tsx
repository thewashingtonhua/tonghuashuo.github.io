import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface SEOProps {
  description?: string,
  lang?: string,
  meta?: { name: string; content: any; property?: undefined; } | { property: string; content: any; name?: undefined; } | ConcatArray<{ name: string; content: any; property?: undefined; } | { property: string; content: any; name?: undefined; }>,
  keywords?: string[],
  title?: string,
  exactTitle?: boolean
}

export const SEO: FC<SEOProps> = (props) => {
  const {
    description = '',
    lang = `zh`,
    meta = [],
    keywords = [],
    title = '',
    exactTitle = false
  } = props


  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const { siteMetadata } = data.site
        const metaDescription = description || siteMetadata.description
        const metaKeywords = keywords.length ? keywords : siteMetadata.keywords
        const metaTitle = title ? `${title} | ${siteMetadata.title}` : siteMetadata.title

        const metas = [
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: metaTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
          {
            name: `keywords`,
            content: metaKeywords.join(`,`),
          }
        ].concat(meta)

        const titleTemplate = exactTitle ? '' : `%s | ${siteMetadata.title}`

        return (
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={titleTemplate}
            meta={metas}
          />
        )
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        keywords
      }
    }
  }
`