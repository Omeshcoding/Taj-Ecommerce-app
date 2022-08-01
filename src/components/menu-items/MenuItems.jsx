import React from 'react'
import {useNavigate} from 'react-router-dom'
import './menu-items.scss'

const MenuItems = ({ title, imageUrl, size ,linkUrl,match}) => {
  let navigate = useNavigate()
  console.log(navigate)

  return (
    <div className={`${size} menu-item` } onClick={()=>{navigate(linkUrl)}}>
      <div className='background-image'
         style={{
      backgroundImage : `url(${imageUrl})`
    }}
    />  
                  <div className='content'>
        <h1 className='title'> {title} </h1>
                      <span className='subtitle'>SHOP NOW</span>
                  </div>
              </div>
  )
}

export default MenuItems;