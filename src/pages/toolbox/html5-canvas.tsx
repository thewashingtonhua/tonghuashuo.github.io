import React, { FC, useEffect, useRef } from 'react'
import { graphql } from 'gatsby'
import { ToolboxLayout } from '../../components'
import './tool.scss'
import { GatsbyDataProps } from '../../utils/interface'

const HTML5Canvas: FC<GatsbyDataProps> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const _canvas = canvasRef.current
    if (_canvas?.getContext) {
      const ctx = _canvas.getContext('2d')
      if (!ctx) return
      ctx.fillStyle = '#999'
      ctx.font='18px Arial';
      ctx.fillText('This browser supports canvas.', 25, 100);
    }
  }, [])

  return (
    <ToolboxLayout title='Canvas'>
      <h1>Canvas</h1>

      <canvas ref={canvasRef} height='200' width='300' style={{
        'backgroundColor': '#DDD',
        'marginTop': '20px'
      }}>Canvas is not supported on this browser</canvas>
    </ToolboxLayout>
  )
}

export default HTML5Canvas

export const query = graphql`
query {
  site {
    siteMetadata {
      title,
      keywords
    }
  }
}`