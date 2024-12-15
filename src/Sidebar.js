import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
          <img src="" alt=""/>
          <Avatar className='sidebar__avatar'/>
          <h2>Luke Knight</h2>
          <h4>lukeknightofficial@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
          <div className='sidebar__stat'>
            <p>Who Viewed Your Profile</p>
            <p className='sidebar__statNumber'>268</p>
          </div>
          <div className='sidebar__stat'>
            <p>Views on Post</p>
            <p className='sidebar__statNumber'>24,355</p>
          </div>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar