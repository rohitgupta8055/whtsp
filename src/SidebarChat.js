import React from 'react'
import { Avatar, IconButton } from '@mui/material';
import "./SidebarChat.css";


function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar/>

        <div className='sidebarChat__info'>
            <h2>Room Name</h2>
            <p>This is the last message</p>
        </div>
      
    </div>
  )
}

export default SidebarChat
