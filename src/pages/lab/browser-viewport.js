import React, { PureComponent, useEffect, useState } from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import './lab.scss'
import { GatsbyDataProps } from '../../utils/interface'

const BrowserViewport = (props: GatsbyDataProps) => {
  const [innerWidth, setInnerWidth] = useState('')
  const [innerHeight, setInnerHeight] = useState('')
  const [outerWidth, setOuterWidth] = useState('')
  const [outerHeight, setOuterHeight] = useState('')
  const [clientWidth, setClientWidth] = useState('')
  const [clientHeight, setClientHeight] = useState('')
  const [screenWidth, setScreenWidth] = useState('')
  const [screenHeight, setScreenHeight] = useState('')
  const [screenAvailWidth, setScreenAvailWidth] = useState('')
  const [screenAvailHeight, setScreenAvailHeight] = useState('')
  const [screenOrientation, setScreenOrientation] = useState('')
  const [screenDeviceXDPI, setScreenDeviceXDPI] = useState('')
  const [devicePixelRatio, setDevicePixelRatio] = useState('')

  const getSize = () => {
    setInnerWidth(window.innerWidth + ' px')
    setInnerHeight(window.innerHeight + ' px')
    setOuterWidth(window.outerWidth + ' px')
    setOuterHeight(window.outerHeight + ' px')
    setClientWidth(document.documentElement.clientWidth + ' px')
    setClientHeight(document.documentElement.clientHeight + ' px')
    setScreenWidth(window.screen.width + ' px')
    setScreenHeight(window.screen.height + ' px')
    setScreenAvailWidth(window.screen.availWidth + ' px')
    setScreenAvailHeight(window.screen.availHeight + ' px')
    setScreenOrientation(screen.msOrientation || (screen.orientation || screen.mozOrientation || {}).type)
    setScreenDeviceXDPI(window.screen.deviceXDPI ? (window.screen.deviceXDPI + ' px') : 'N/A')
    setDevicePixelRatio(window.devicePixelRatio + '')
  }

  useEffect(() => {
    getSize()

    window.addEventListener('resize', getSize)

    return () => {
      window.removeEventListener('resize', getSize)
    }
  }, [])

  return (
    <Layout>
      <SEO
        title='Viewport | 实验室'
        keywords={props.data.site.siteMetadata.keywords}
      />
      <div className='mf-content lab-item'>
        <article>
          <a href='/lab' className='back'>&laquo; Back</a>

          <h1>Viewport</h1>

          <table cellSpacing={0}>
            <tbody>

              <tr className='title'>
                <td colSpan={2}>Content</td>
              </tr>
              <tr>
                <td>document.documentElement.clientWidth (No ScrollBar)</td>
                <td>{clientWidth}</td>
              </tr>
              <tr>
                <td>document.documentElement.clientHeight (No TopBar, No DevTool)</td>
                <td>{clientHeight}</td>
              </tr>

              <tr className='title'>
                <td colSpan={2}>Browser</td>
              </tr>
              <tr>
                <td>window.innerWidth</td>
                <td>{innerWidth}</td>
              </tr>
              <tr>
                <td>window.innerHeight (No TopBar, No DevTool)</td>
                <td>{innerHeight}</td>
              </tr>
              <tr>
                <td>window.outerWidth</td>
                <td>{outerWidth}</td>
              </tr>
              <tr>
                <td>window.outerHeight</td>
                <td>{outerHeight}</td>
              </tr>

              <tr className='title'>
                <td colSpan={2}>Device</td>
              </tr>
              <tr>
                <td>window.screen.width</td>
                <td>{screenWidth}</td>
              </tr>
              <tr>
                <td>window.screen.height</td>
                <td>{screenHeight}</td>
              </tr>
              <tr>
                <td>window.screen.availWidth</td>
                <td>{screenAvailWidth}</td>
              </tr>
              <tr>
                <td>window.screen.availHeight (No TopBar)</td>
                <td>{screenAvailHeight}</td>
              </tr>
              <tr>
                <td>window.screen.orientation</td>
                <td>{screenOrientation}</td>
              </tr>
              <tr>
                <td>window.screen.deviceXDPI (IE Only)</td>
                <td>{screenDeviceXDPI}</td>
              </tr>
              <tr>
                <td>window.devicePixelRatio</td>
                <td>{devicePixelRatio}</td>
              </tr>
            </tbody>
          </table>
        </article>
      </div>
    </Layout>
  )
}

export default BrowserViewport

export const query = graphql`
query {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
}`