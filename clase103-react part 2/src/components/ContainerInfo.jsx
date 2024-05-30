import React from 'react'
import PropTypes from 'prop-types'

export const ContainerInfo = (props) => { // {children, title}
  return (
    <div>
        <h1>{props.title}</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iste.</p>

        <div className="bg-info">
          {/* CHILDREN */}
          {props.children}
          {/* END CHILDREN */}
        </div>

    </div>
  )
}

ContainerInfo.propTypes = {
  title: PropTypes.string
}

ContainerInfo.defaultProps = {
  title: "INFORMACIÓN"
}
