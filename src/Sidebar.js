import React from 'react'
import "./Sidebar.css"
import SidebarChat from './SidebarChat';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
      <IconButton>
        <Avatar src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      </IconButton>
        <div className='sidebar__headerRight'>
          <IconButton>
          <DonutLargeIcon/>
          </IconButton>
          <IconButton>
          <ChatIcon/>
          </IconButton>
          <IconButton>
          <MoreVertIcon/>
          </IconButton>
          
        </div>
      </div>


    <div className='sidebar__search'>
      <div className='sidebar_searchContainer'>
      <SearchOutlinedIcon/>
      <input placeholder='Search or start new chat' type="text"/>
      </div>
    </div>

    
    <div className='sidebar__chats'>
      <SidebarChat/>
      <SidebarChat/>
      <SidebarChat/>
    </div>


    </div>
  )
}

export default Sidebar
