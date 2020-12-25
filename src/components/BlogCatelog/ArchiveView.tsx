import React, { FC } from 'react'
import { BlogCatelogViewProps } from './interface'
import { Link } from 'gatsby'
import dayjs from 'dayjs'
import './ArchiveView.scss'
import { BlogNode } from 'utils/interface'

interface Props extends BlogCatelogViewProps {}

interface BlogCategory {
  year: number,
  blogs: BlogNode[]
}

const categorizeBlogs = (blogs: BlogNode[]): BlogCategory[] => {
  const years: number[] = []
  const categoryObj: {
    [key: number]: BlogNode[]
  } = {}

  blogs.forEach(blog => {
    const year = dayjs(blog.fields.date).year()
    if (!Reflect.has(categoryObj, year)) {
      categoryObj[year] = []
      years.push(year)
    }
    categoryObj[year].push(blog)
  })

  return years.map(year => ({
    year,
    blogs: categoryObj[year]
  }))
}

const renderBlogs = (blogs: BlogNode[]) => {
  return blogs.map(node => {
    const date = dayjs(node.fields.date).format('YYYY-MM-DD')
    const title = `${date}-${node.frontmatter.title}`
    return (
      <li key={node.id} className='category-post'>
        <Link to={node.fields.slug}>{title}</Link>
      </li>
    )
  })
}

export const BlogCatelogArchiveView: FC<Props> = (props) => {
  const { blogs } = props
  const categories = categorizeBlogs(blogs)

  return (
    <div className='blog-list'>
      { categories.map(category => (
        <div className='category' key={category.year}>
          <header className='category-header'>
            <p className='year'>{category.year}</p>
          </header>
          <ul className='category-posts'>
            { renderBlogs(category.blogs) }
          </ul>
        </div>
      )) }
    </div>
  )
}