import React from 'react'
import "./sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import Drawer1  from '../drawer/Drawer1';
const Sidebar = () => {
  return (
    <div className="side">
      <div className='heading'>MyMusic</div>
      <div className='dra'><Drawer1/></div>
        <div className='topside'>
          
          <a href='/'><p>Home</p></a>
          <a><p> Search</p></a>
        </div>
        <div className='bottomside'>
          
            <div className='sing'>Singers</div>
            <Divider light />
            <div className='singbox'>
              <a href='/search/Yuvan'><div className="singername">Yuvan Shankar Raja</div></a>
              <a href='/search/Anirudh'><div className="singername">Anirudh Ravichandar</div></a>
          </div>
        </div>
    </div>
  )
}

export default Sidebar;