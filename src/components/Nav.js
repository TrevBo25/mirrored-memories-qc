import React from 'react'

const Nav = ({color, type}) => (
  <div className={`nav-${color}-${type}`} >
    <h1 className='nav-header'>mirrored memories.</h1>
  </div>
)

export default Nav;