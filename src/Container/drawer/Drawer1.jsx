import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import "./drawe.css"
import MenuIcon from '@mui/icons-material/Menu';

export default function Drawer1() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width:300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="side1">
      <div className='heading'>MyMusic</div>
        <div className='topside'>
          <a></a>
          <a href='/'><p>Home</p></a>
          <a><p>Search</p></a>
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
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className='topbar1'>
          <Button onClick={toggleDrawer(anchor, true)}><div className='menuicon'><MenuIcon/></div></Button>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}