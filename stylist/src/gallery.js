import React from 'react'
import PropTypes from 'prop-types'

const gallery = (props) => {
  return (
    <div>
      <div className="pics">
        <img src='colors/lowlights.jpg'   margin="20px" height='100px' alt='lowlights'/>
        <img src='colors/redandblue.jpg' height='100px' alt='redandblue'/>
      </div>
    </div>
  )
}

export default gallery
