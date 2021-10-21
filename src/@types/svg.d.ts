declare module '*.svg' {
  import React from 'react'
  import Svg, { SVGProps } from 'react'
  const content: React.FC<SvgProps>
  export default content
}
