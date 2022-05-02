import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./SideButton.scss"

const SideButton = (props) => {

  const navigate = useNavigate()

  return (
        <div className='container side-menu-item' onClick={() => navigate(props.path)}>
            {props.buttontext}
        </div>
  )
}

export default SideButton