import React from 'react'
import Preloader from '../../components/preLoader'
type Props = {}

const Projects = (props: Props) => {
  return (
    <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  >
      <Preloader/>
    </div>
  )
}

export default Projects