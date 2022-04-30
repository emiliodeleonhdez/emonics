import React from 'react'
import "./SideButton.scss"

const SideButton = (props) => {
  return (
    <>
        <div className='container side-menu-item'>
            {props.buttonText}
        </div>
    </>
  )
}

export default SideButton