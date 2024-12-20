import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import bgimage from "./content/bgimage.jpg"
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {


  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
          <img src={bgimage} alt=""/>
          <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
          <div className='sidebar__stat'>
            <p>Who Viewed Your Profile</p>
            <p className='sidebar__statNumber'>69</p>
          </div>
          <div className='sidebar__stat'>
            <p>Views on Post</p>
            <p className='sidebar__statNumber'>696,969</p>
          </div>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar